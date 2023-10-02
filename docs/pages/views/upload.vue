<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadInstance } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const uploadRef = ref<UploadInstance>()

const fileList = ref<any[]>([])
const fileTableData = ref<any[]>([])
const fileSizeSum = ref(0)
const fileSuccessCount = ref(0)

watch(
  () => fileList.value,
  newList => setTableData(newList),
)

/** 提交上传 */
const submitUpload = () => {
  if (fileList.value?.length <= 0) {
    ElMessage({ message: '文件上传列表为空，请选择唔要上传的文件', type: 'warning' })
    return
  }
  uploadRef.value!.submit()
}

const handleChange = (file, fileList) => {
  fileList.value = fileList
}

const handleRemove = (file, fileList) => {
  fileList.value = fileList
}

const handleProgress = (event, file, fileList) => {
  fileList.forEach((item) => {
    if (file.uid === item.uid) {
      if (item.status !== 'success' || item.status !== 'fail') {
        const num = ((event.loaded / event.total) * 100) | 0 // 重新计算上传百分比
        item.num = num
        if (num === 100)
          fileSuccessCount.value++
      }
    }
  })
  fileList.value = fileList
}

const handleSuccess = (response, file, fileList) => {
  fileList.value = fileList
}

const handleError = () => ElMessage({ message: '服务器连接失败，请检查网络重新上传', type: 'error' })

const selectFile = () => {
  const fileInput = uploadRef.value!.$el.querySelector('input[type=file]')
  fileInput.click()
}

const clearTableData = () => {
  fileList.value = []
  fileTableData.value = []
  fileSizeSum.value = 0
  fileSuccessCount.value = 0
}

const cancelUpload = (index, row) => {
  const afterFileList = fileList.value
  if (row.status === 'uploading') {
    console.info(`取消上传：${row.name}`)
    uploadRef.value!.abort(row.raw)
    afterFileList.forEach((item) => {
      if (item.uid === row.uid)
        item.status = 'ready'
      // item.num = 0;//进度条归零
    })
  }
  fileList.value = afterFileList
  setTableData(fileList.value)
}

const delFile = index => fileList.value.splice(index, 1)

function setTableData(newList) {
  fileTableData.value = []
  let file_size_sum = 0
  newList.forEach((item) => {
    const row = Object.assign({}, item)
    row.type = item.name.substring(item.name.lastIndexOf('.'), item.name.length)
    row.sizeStr = `${Math.round(item.size / 1024)}KB`
    fileTableData.value.push(row)
    file_size_sum += item.size
  })
  fileSizeSum.value = Math.round(file_size_sum / (1024 * 1024) * 100) / 100
}
</script>

<template>
  <div class="max-w-4xl mx-auto pt-30">
    <ElUpload
      ref="uploadRef"
      class="upload-demo"
      action="http://localhost:8686/file/upload"
      :on-remove="handleRemove"
      :on-progress="handleProgress"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :file-list="fileList"
      :auto-upload="false"
      :show-file-list="true"
      drag
      multiple
    >
      <div class="flex items-center justify-center gap-2">
        <el-icon class="!text-60px !text-[#909399] mb-2">
          <UploadFilled />
        </el-icon>
        <div class=" el-upload__text">
          将目录或多个文件拖到此处, 或<em class="ml-1">点击上传</em>
        </div>
      </div>

      <div class="el-upload__text" style="margin-top: 10px">
        支持的文件类型: jpg、jpeg、bmp、webp、gif、png、xml、word、pdf
      </div>
      <div class="el-upload__text pt-2">
        单个文件不超过1GB
      </div>
    </ElUpload>
    <div class="pt-4 pb-6">
      <ElButton size="small" type="primary" @click="selectFile">
        选取文件
      </ElButton>
      <ElButton style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">
        上传到服务器
      </ElButton>
    </div>
    <div class="">
      <div class="flex justify-between">
        <div class="flex gap-3">
          <ElTag>文件数量：{{ fileTableData?.length }}个</ElTag>
          <ElTag type="info">
            总大小：{{ fileSizeSum }}M
          </ElTag>
          <ElTag type="success">
            成功上传：{{ fileSuccessCount }}个
          </ElTag>
        </div>
        <ElButton type="danger" size="small" @click="clearTableData">
          清空上传列表
        </ElButton>
      </div>
      <ElTable :data="fileTableData" class="mt-4" :cell-style="{ textAlign: 'center' }" stripe>
        <ElTableColumn prop="name" label="文件名" />
        <ElTableColumn prop="type" label="类型" width="80" />
        <ElTableColumn prop="sizeStr" label="大小" />
        <ElTableColumn prop="status" label="状态" width="120">
          <template #default="scope">
            <ElTag v-if="scope.row.status === 'ready'" size="mini">
              待上传
            </ElTag>
            <ElTag v-else-if="scope.row.status === 'uploading'" type="warning" size="mini">
              上传中
            </ElTag>
            <ElTag v-else-if="scope.row.status === 'fail'" type="danger" size="mini">
              上传失败
            </ElTag>
            <ElTag v-else-if="scope.row.status === 'success'" type="success" size="mini">
              上传成功
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="进度" width="120">
          <template #default="scope">
            <ElProgress
              :text-inside="true"
              :stroke-width="15"
              :percentage="scope.row.num"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作">
          <template #default="scope">
            <ElButton
              type="danger"
              class="el-icon-close"
              size="mini"
              :disabled="!(scope.row.status === 'uploading')"
              title="取消上传"
              @click="cancelUpload(scope.$index, scope.row)"
            />
            <ElButton
              type="danger"
              class="el-icon-delete"
              size="mini"
              title="删除文件"
              @click="delFile(scope.$index)"
            />
          </template>
        </ElTableColumn>

        <template #empty>
          <div class="el-table__empty-block">
            <div class="pt-8 pb-3">
              <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa" /></g></g></svg>
              暂无数据
            </div>
          </div>
        </template>
      </ElTable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table th .cell {
  color: #606266;
  text-align: center;
  font-size: 13px;
}

.el-badge__content.is-fixed.is-dot {
  right: 5px;
}

.el-badge__content.is-dot {
  height: 8px;
  width: 8px;
  padding: 0;
  right: 0;
  border-radius: 50%;
}

.el-badge__content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
}

.el-badge__content {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
</style>
