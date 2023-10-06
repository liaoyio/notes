---
author: "Liaoyi"
date: 2022-11-25
---

## 如何优雅的封装弹窗组件

## 指令级别的弹窗封装

直接使用`js`代码来进行打开弹框。

:::code-group
```vue [Dialog.vue]
<!--
  组件代码:
  所有的状态都在这个组件内部维护
  tip:
  1. 因为通过指令打开的方式，传入的参数无法响应式，只能在组件内部进行响应式
  2. 组件中使用的组件都需要在组件的内部注册一次才能正常使用 (自动导入插件可能会导致组件无法正常显示)
 -->

<script setup lang="ts">
import { ref } from 'vue'

import {
  ElButton,
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElRadio,
  ElRadioGroup,
} from 'element-plus'

const props = defineProps({
  formData: {
    type: Object,
    default: () => ({}),
  },
})

const emits = defineEmits(['cancel', 'submit'])

const dialogVisible = ref(false)

const rules = {
  name: { required: true, message: '请输入名称', trigger: 'blur' },
}

const formData = ref({ ...props.formData })

const handleCancel = () => {
  dialogVisible.value = false
  emits('cancel')
}

const form = ref(null)
const handleSubmit = () => {
  form.value.validate((valid) => {
    if (valid)
      emits('submit', formData.value)
  })
}
</script>

<template>
  <ElDialog
    v-bind="$attrs"
    v-model="dialogVisible"
    title="Title"
  >
    <ElForm ref="form" :model="formData" :rules="rules">
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="formData.name" placeholder="请输入姓名" />
      </ElFormItem>

      <ElFormItem label="性别" prop="gender">
        <ElRadioGroup v-model="formData.gender">
          <ElRadio :label="1">
            男
          </ElRadio>
          <ElRadio :label="0">
            女
          </ElRadio>
        </ElRadioGroup>
      </ElFormItem>

      <ElFormItem label="年龄" prop="age">
        <ElInputNumber v-model="formData.age" />
      </ElFormItem>
    </ElForm>

    <template #footer>
      <ElButton @click="handleCancel">
        取消
      </ElButton>
      <ElButton type="primary" @click="handleSubmit">
        提交
      </ElButton>
    </template>
  </ElDialog>
</template>
```

```ts [dialog.ts]
import { h, render } from 'vue'
import Dialog from './Dialog.vue'

const divDom = document.createElement('div')
document.body.appendChild(divDom)

const dialog = (option) => {
  return new Promise((resolve, reject) => {
    const onSubmit = (data) => {
      render(null, divDom)
      resolve(data)
    }
    const onCancel = () => {
      render(null, divDom)
      reject(new Error('取消'))
    }

    const vNode = h(Dialog, {
      ...option,
      modelValue: true,
      onSubmit,
      onCancel,
      onClose: onCancel,

    })
    render(vNode, divDom)
  })
}
export default dialog
```

```vue [使用]
<script setup lang="ts">
import dialog from './dialog'

const formData = ref({
  name: 'liaoyi',
  age: 25,
  gender: 1,
})

const openDialog = () => {
  dialog({ formData: formData.value }).then((data) => {
    console.log(data)
  })
}
</script>

<template>
  <div>
    <el-button type="primary" @click="openDialog">
      打开弹框
    </el-button>
  </div>
</template>
```
:::
