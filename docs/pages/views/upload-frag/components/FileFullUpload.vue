<script setup lang="ts">
import { Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { fileFullUpload } from '../api/common'

const emit = defineEmits(['refresh'])
const isDisabled = ref(false)

const inp = ref<HTMLInputElement | null>(null)

const upload = (e: Event) => {
  const eTarget = e.target as HTMLInputElement
  if (!eTarget.files) return
  isDisabled.value = true
  const file = eTarget.files[0]
  const fd = new FormData() as any
  fd.append('file', file)
  fileFullUpload(fd).then(() => {
    // 上传完成
    emit('refresh')
  }).finally(() => {
    fd.delete('file')
    isDisabled.value = false
  })
}
</script>

<template>
  <el-button :disabled="isDisabled" type="primary" :icon="Upload" @click="inp?.click()">
    上传文件
  </el-button>
  <input v-show="false" ref="inp" type="file" @change="upload">
</template>
