<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { formProps, rules } from './FormUIData2'

const props = defineProps(formProps)

const emit = defineEmits([
  'update:open',
  'update:loading',
  'update:formData',
  'submit',
])

const refForm = ref<FormInstance>()

const close = () => {
  if (!refForm.value) return
  refForm.value.resetFields()
  emit('update:open', false)
}

const show = useVModel(props, 'open', emit)
const _loading = useVModel(props, 'loading', emit)
const form = useVModel(props, 'formData', emit)

const handleSubmit = () => {
  refForm.value?.validate((errors) => {
    if (!errors)  emit('submit')
    else console.log(errors)
  })
}
</script>

<template>
  <el-dialog
    v-model="show" :title="title"
    :destroy-on-close="true"
    @close="close"
    @open="open"
  >
    <el-form
      ref="refForm"
      v-loading="_loading"
      :model="form"
      :rules="rules"
      status-icon
      label-width="80px"
    >
      <el-form-item prop="name" label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <el-input v-model="form.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item prop="phoneNumber" label="联系方式">
        <el-input v-model="form.phoneNumber" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="remark" label="备注">
        <el-input
          v-model="form.remark"
          type="textarea"
          placeholder="请输入备注"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ submitText }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
