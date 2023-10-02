<script setup lang="ts">
import { type PropType, Ref, UnwrapRef, computed, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// import { useVModel } from './useVModel'
import { useVModel } from '@vueuse/core'

export interface IForm {
  name: string
  age: string | number
  phoneNumber: string
  remark: string
}

const props = defineProps({
  formData: {
    type: Object as PropType<IForm>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
} as const)

const emit = defineEmits([
  'update:loading',
  'update:formData',
  'submit',
])


const refForm = ref<FormInstance>()

const _loading = computed({
  set: (value: boolean) => emit('update:loading', value),
  get: () => props.loading,
})

const form =  useVModel(props, 'formData', emit)

const rules: FormRules = {
  name:[{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  phoneNumber: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
  remark: [{ required: false }],
}
</script>

<template>
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
</template>
