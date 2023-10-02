<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { type IForm } from './FormUIData2'
import FormUI from './UiForm2.vue'

const open = ref(false)
const loading = ref(false)

const formData: IForm = reactive({
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
})

const init = () => {
  console.log('-----AddDialog.vue------ init() 触发了 -------\n')
  open.value = true
}

const submit = async () => {
  loading.value = true
  setTimeout(() => {
    ElMessage.success({ message: '编辑成功' })
    loading.value = false
    close()
  }, 2000)
}

defineExpose({ init })
</script>

<template>
  <FormUI
    v-model:open="open"
    v-model:formData="formData"
    v-model:loading="loading"
    title="新增"
    @submit="submit"
  />
</template>
