
<script setup lang="ts">
import { ref } from 'vue'

const show = ref<boolean>(false)
const  onToggle = (toggle: boolean) => show.value = toggle
</script>

<template>
  <div class="p-8 rounded-lg linear-gradient-blue flex flex-col items-center min-h-40">
    <h4>使用 Transition标签实现：淡入</h4>
    <div class="flex gap-3 my-4">
      <el-button type="primary" @click="onToggle(true)">
        淡入
      </el-button>
      <el-button @click="onToggle(false)">
        隐藏
      </el-button>
    </div>
    <Transition>
      <div v-if="show" class="w-60 bg-orange-500 h-20 rounded" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
// 动效class
// 这里可以认为是对元素进入前的样式描述
.v-enter-from {
  opacity: 0;
}
// 这里可以认为是从from样式转换到to样式的过渡方式与过渡用时的描述
.v-enter-active {
  transition: opacity 1s ease-in;
}
// 这里可以认为是对元素进入后的样式描述
.v-enter-to {
  opacity: 1;
}
</style>
