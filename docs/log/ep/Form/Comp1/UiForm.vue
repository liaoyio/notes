<script setup lang="ts">
import { ref } from 'vue'
import { ElInputNumber } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { formProps, rules, services } from './FormUIData'

const props =  defineProps(formProps)
const emit = defineEmits(['finish'])
const refForm = ref<HTMLElement>()

const handleSubmit = async (form) => {
  try {
    await form.validate()
    emit('finish', refForm.value)
  }
  catch (err) {
    console.log(err)
  }
}

const form =  useVModel(props, 'formData', emit)
</script>

<template>
  <div class="py-6 px-4  border border-dashed border-blue-500 rounded-lg ">
    <ElForm
      ref="refForm"
      v-loading="loading"
      :model="form"
      :rules="rules"
      status-icon
      label-width="80px"
      @submit.prevent="handleSubmit(refForm)"
    >
      <ElFormItem label="商品名称" prop="name">
        <ElInput v-model="form.name" placeholder="请输入商品名称" />
      </ElFormItem>
      <ElFormItem label="价格" prop="price">
        <ElInputNumber v-model="form.price" />
      </ElFormItem>
      <ElFormItem label="商品服务">
        <ElCheckboxGroup v-model="form.services">
          <ElCheckbox
            v-for="(s, idx) in services"
            :key="idx"
            :label="s"
          >
            {{ s }}
          </ElCheckbox>
        </ElCheckboxGroup>
      </ElFormItem>
      <ElFormItem>
        <ElButton native-type="submit" type="primary">
          {{ submitText }}
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

