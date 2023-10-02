<script setup lang="ts">
import { ref } from 'vue'
import AddDialog from './Comp2/AddDialog.vue'
import EditDialog from './Comp2/EditDialog.vue'

const addRef = ref<InstanceType<typeof AddDialog>>()
const editRef = ref<InstanceType<typeof EditDialog>>()

const handleEdit = () => {
  editRef.value?.init('id-12')
}
</script>

<template>
  <div class="flex  gap-8">
    <div class="py-4 ">
      <el-button @click="addRef?.init()">
        点击新增
      </el-button>
      <el-button type="primary" @click="handleEdit">
        点击编辑
      </el-button>
    </div>
    <AddDialog ref="addRef" />
    <EditDialog ref="editRef" />
  </div>
</template>
