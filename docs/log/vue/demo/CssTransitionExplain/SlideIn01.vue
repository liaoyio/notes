<script setup lang="ts">
import { ref } from 'vue'

const slideInElRef = ref<HTMLDivElement>()

const showAnimation = (el: HTMLDivElement | undefined, className: any) => {
  if (!el) return
  el.classList.contains(className) && el.classList.remove(className)
  requestAnimationFrame(() => el!.classList.add(className))
}
</script>

<template>
  <div class="py-8  rounded-lg linear-gradient-blue flex flex-col  items-center">
    <el-button class="mb-8" @click="showAnimation(slideInElRef, '_animate_slideIn')">
      演示幻灯片效果
    </el-button>
    <div ref="slideInElRef" class="w-50 h-25  bg-white rounded-lg flex_ccc">
      幻灯片效果
    </div>
  </div>
</template>

<style lang="scss" scoped>
._animate_slideIn {
  animation: slideIn 0.5s ease-in;
}
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
