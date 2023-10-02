
import type { PropType } from 'vue'

interface TFormData {
  name: string
  price: number
  services: string[]
}
export const services = ['7天无理由', '30天保价', '2年只换不修']

export const formProps = {
  formData: {
    type: Object as PropType<TFormData>,
    required: true,
  },
  submitText: {
    type: String,
    default: '提交',
  },
  loading: {
    type: Boolean,
    default: false,
  },
} as const


export const rules = {
  name:[
    { required: true, message: '请输入商品名称', trigger: 'blur' },
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' },
  ],
}
