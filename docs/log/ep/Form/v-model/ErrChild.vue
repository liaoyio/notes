<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface IForm {
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
} as const)

const emit = defineEmits([
  'update:loading',
  'update:formData',
  'submit',
])

const refForm = ref<FormInstance>()

const form = computed({
  set: (value: IForm)  => {
    console.log(`-->监听到了 formData 对象某个值改变:${value}`)
    emit('update:formData', value)
  },
  get: () => props.formData,
})


const rules: FormRules = {
  name:[
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
  ],
  phoneNumber: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
  ],
  remark: [{ required: false }],
}
</script>

<template>
  <el-form
    ref="refForm"
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
