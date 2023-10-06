<script setup lang="ts">
import { reactive } from 'vue'
import Child from './ErrChild.vue'

const fromData = reactive({
  name: '',
  age: '',
  phoneNumber: '',
  remark: '',
})
</script>

<template>
  <div class="pb-6">
    请查看控制台输出 👀
  </div>
  <Child v-model:formData="fromData" />
</template>
