<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ProductForm from './UiForm.vue'

let formData = reactive<any>({
  name: '',
  price: 0,
  services: [],
})

const loading = ref(true)

onMounted(() => {
  setTimeout(()=>{
    formData = reactive({
      name: 'Huawei Mata 60 +',
      price: 99999,
      services: ['7天无理由', '30天保价'],
    })
    loading.value = false
  }, 400)
})


const finish = () => {
  loading.value = true
  setTimeout(()=>{
    ElMessage.success({ message:'修改商品成功' })
    loading.value = false
  }, 2000)
}
</script>

<template>
  <ProductForm
    :form-data="formData"
    submit-text="提交修改"
    :loading="loading"
    @finish="finish"
  />
</template>
