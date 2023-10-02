import type { PropType } from 'vue'
import type { FormRules } from 'element-plus'

export interface IForm {
  name: string
  age: string | number
  phoneNumber: string
  remark: string
}

export const defaultFromData = {
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
}

export const formProps = {
  formData: {
    type: Object as PropType<IForm>,
    required: true,
  },
  submitText: {
    type: String,
    default: '提交',
  },
  title: {
    type: String,
    default: '新增',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
} as const

export const rules: FormRules = {
  name: [
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
