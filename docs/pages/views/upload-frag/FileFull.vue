<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import FileFullUpload from './components/FileFullUpload.vue'
import { selFileFullUploadList } from './api/common'
import { downloadFullFile } from './utils/file'
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
    orderByDto: [
      { num: 0, field: 'createTime', isAsc: false },
    ],
  },
})

const getInfo = () => {
  state.loaded = false
  selFileFullUploadList(state.queryParams).then((res) => {
    (state.list as any[]) = res.rows
    state.total = res.total
    state.loaded = true
  })
}

onMounted(() => getInfo())

const onSortChange = ({ column, prop, order }) => {
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
  downloadFullFile(API_URL + row.fileNewName, row.fileName)
}
</script>

<template>
  <div class="max-w-5xl mx-auto pt-20">
    <FileFullUpload @refresh="getInfo" />

    <el-table
      v-loading="!state.loaded"
      class="mt-4"
      :data="state.list"
      stripe
      @sortChange="onSortChange"
    >
      <el-table-column prop="id" label="id" min-width="200" />
      <el-table-column prop="fileName" label="原文件名" min-width="200" />
      <el-table-column prop="fileNewName" label="现文件名" min-width="360" />
      <el-table-column prop="fileMd5" label="文件MD5" min-width="300" />
      <el-table-column prop="remark" label="备注" min-width="200" />
      <el-table-column
        prop="whetherFirst"
        center
        sortable="custom" label="是否第一上传人" min-width="200"
      />
      <el-table-column prop="createBy" label="createBy" min-width="200" />
      <el-table-column
        prop="createTime" sortable="custom"
        label="上传日期" min-width="200"
      />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default="{ row }">
          <el-button v-no-more-click link type="primary" size="small" @click="downloadFile(row)">
            下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="flex flex-row-reverse mt-3">
      <el-pagination
        v-model:current-page="state.queryParams.pageNum"
        v-model:page-size="state.queryParams.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="state.total"
        @size-change="getInfo"
        @current-change="getInfo"
      />
    </div>
  </div>
</template>
