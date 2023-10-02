<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { type IForm } from './FormUIData2'
import FormUI from './UiForm2.vue'

const es = {
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
}

const open = ref(false)
const loading = ref(true)
const formData = ref<IForm>(es)

const init = async (id: string) => {
  console.log('-----EditDialog.vue------ init() 触发了 -------\n')
  open.value = true
  loading.value = true
  setTimeout(() => {
    formData.value = {
      name: 'LiaoYi',
      age: '25',
      phoneNumber: '13246566775',
      remark: 'this is My First ...',
    }
    loading.value = false
  }, 1200)
}

const submit = async () => {
  loading.value = true
  setTimeout(() => {
    ElMessage.success({ message: '编辑成功' })
    loading.value = false
    formData.value = reactive(es)
  }, 2000)
}

defineExpose({ init })
</script>

<template>
  <FormUI
    v-model:open="open"
    :form-data="formData"
    :loading="loading"
    title="编辑"
    @submit="submit"
  />
</template>
