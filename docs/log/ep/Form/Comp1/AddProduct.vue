<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ProductForm from './UiForm.vue'

const formData = reactive({
  name: '',
  price: 0,
  services: [],
})

const loading = ref(false)

const finish = () => {
  loading.value = true
  setTimeout(()=>{
    ElMessage.success({ message:'添加商品成功' })
    loading.value = false
  }, 2000)
}
</script>

<template>
  <ProductForm
    :form-data="formData"
    submit-text="新增商品"
    :loading="loading"
    @finish="finish"
  />
</template>
