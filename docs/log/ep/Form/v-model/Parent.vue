<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import type { IForm } from './Child.vue'
import Child from './Child.vue'

const loading = ref(true)

let fromData = reactive<IForm>({
  name: '',
  age: 18,
  phoneNumber: '',
  remark: '',
})

watch(fromData, (newValue) => {
  console.log('\n ---- Parent.vue ---- \n fromData -----> 值改变了', newValue, '\n')
})

onMounted(()=>{
  loading.value = true
  setTimeout(()=>{
    fromData =  reactive({
      name: 'Yi',
      age: 25,
      phoneNumber: '13246566775',
      remark: 'Hello world~',
    })
    loading.value = false
  }, 4000)
})
</script>

<template>
  <div class="pb-6">
    请查看控制台输出 👀
  </div>
  <Child v-model:loading="loading" v-model:form-data="fromData" />
</template>
