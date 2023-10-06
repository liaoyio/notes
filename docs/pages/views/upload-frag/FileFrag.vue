<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { downloadFullFile, getSize } from './utils/file'
import FileFragUpload from './components/FileFragUpload.vue'
import { selFileChunkUploadList } from './api/common'
import noMoreClick from './utils/noMoreClick'

const API_URL = 'http://124.222.108.118:8075/ufile/'

const vNoMoreClick = noMoreClick

const state = reactive({
  list: [],
  total: 0,
  loaded: false,
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    fileName: '',
    fileMd5: '',
    ignoreSame: false,
    orderByDto: [
      { num: 0, field: 'createTime', isAsc: false },
    ],
  },
  downloadProgress: 0,
  dialogVisible: false,
})
const formRef = ref<FormInstance>()

const getInfo = () => {
  state.loaded = false
  selFileChunkUploadList(state.queryParams).then((res) => {
    (state.list as any[]) = res.rows
    state.total = res.total
    state.loaded = true
  })
}

onMounted(() => getInfo())

const onSortChange = ({ _, prop, order }) => {
  if (order) {
    // 排序
    state.queryParams.orderByDto = [{
      num: 0,
      field: prop,
      isAsc: order === 'ascending',
    }]
    // const item = state.queryParams.orderByDto.find(item => item.field === prop);
    // if (item) {
    //   item.isAsc = order === 'ascending'
    // } else {
    //   state.queryParams.orderByDto.push({
    //     num: state.queryParams.orderByDto.sort((a, b) => b.num - a.num)[0]?.num + 1 || 0,
    //     field: prop,
    //     isAsc: order === 'ascending'
    //   })
    // }
  }
  else {
    // 取消排序
    state.queryParams.orderByDto.splice(state.queryParams.orderByDto.findIndex(item => item.field === prop), 1)
  }
  getInfo()
}
const downloadFile = (row) => {
  state.dialogVisible = true
  downloadFullFile(API_URL + row.fileNewName, row.fileName, (evt) => {
    state.downloadProgress = Number((evt.progress * 100).toFixed(2))
    if (evt.progress === 1) {
      state.dialogVisible = false
      state.downloadProgress = 0
    }
  })
}
const open = (row) => {
  if (window) window.open(`${API_URL}${row.fileNewName}`)
}
const onFilter = () => {
  getInfo()
}
const onReset = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
  getInfo()
}
</script>

<!-- -->
<template>
  <div class="max-w-5xl mx-auto py-20 ">
    <FileFragUpload @refresh="getInfo" />

    <el-form ref="formRef" class="mt-4" :inline="true" :model="state.queryParams">
      <el-form-item label="源文件名" prop="fileName">
        <el-input v-model="state.queryParams.fileName" placeholder="请输入源文件名" clearable />
      </el-form-item>
      <el-form-item label="文件MD5" prop="fileMd5">
        <el-input v-model="state.queryParams.fileMd5" placeholder="请输入文件MD5" clearable />
      </el-form-item>
      <el-form-item label="忽略重复文件" prop="ignoreSame">
        <el-switch v-model="state.queryParams.ignoreSame" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onFilter">
          搜索 🔍
        </el-button>
        <el-button @click="onReset">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="!state.loaded" style="width: 100%" :data="state.list" stripe @sortChange="onSortChange">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="fileName" label="源文件名" min-width="200" />
      <el-table-column prop="fileNewName" label="现文件名" min-width="220" />
      <el-table-column prop="fileMd5" label="文件MD5" min-width="300" />
      <el-table-column prop="fileSize" label="文件大小" width="100">
        <template #default="{ row }">
          {{ getSize(row.fileSize) }}
        </template>
      </el-table-column>
      <el-table-column prop="chunkNum" label="分片总数" width="80" />
      <el-table-column prop="uploadedNum" label="已上传分片数" min-width="120" />
      <el-table-column prop="remark" label="备注" width="150" />
      <el-table-column prop="whetherFirst" sortable="custom" label="第一上传人" width="120" />
      <el-table-column prop="whetherMerge" sortable="custom" label="是否已合并" width="120" />
      <el-table-column prop="createBy" label="Create By" width="100" />
      <el-table-column prop="createTime" sortable="custom" label="上传日期" width="200" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default="{ row }">
          <el-button v-if="row.chunkNum === row.uploadedNum" v-no-more-click link type="primary" size="small"
            @click="open(row)">
            在线观看
          </el-button>
          <el-button v-if="row.chunkNum === row.uploadedNum" v-no-more-click link type="primary" size="small"
            @click="downloadFile(row)">
            下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex flex-row-reverse mt-3">
      <el-pagination v-model:current-page="state.queryParams.pageNum" v-model:page-size="state.queryParams.pageSize"
        :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" :total="state.total"
        @size-change="getInfo" @current-change="getInfo" />
    </div>
  </div>

  <el-dialog v-model="state.dialogVisible" draggable :close-on-click-modal="false" :close-on-press-escape="false"
    :show-close="false">
    <el-progress :percentage="state.downloadProgress" :stroke-width="15" striped striped-flow :duration="10" />
  </el-dialog>
</template>

<style scoped lang="scss">
</style>
