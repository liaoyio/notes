<script setup lang="ts">
import { ref } from 'vue'

const fadeInElRef = ref<HTMLDivElement>()

const showAnimation = (el: HTMLDivElement | undefined, className: any) => {
  if (!el) return
  el.classList.contains(className) && el.classList.remove(className)
  requestAnimationFrame(() => el!.classList.add(className))
}
</script>

<template>
  <div class="py-8  rounded-lg linear-gradient-blue flex flex-col  items-center">
    <el-button class="mb-8" @click="showAnimation(fadeInElRef, '_animate_fadeIn')">
      演示缩小
    </el-button>
    <div ref="fadeInElRef" class="w-50 h-25  bg-white rounded-lg flex_ccc">
      缩小
    </div>
  </div>
</template>

<style lang="scss" scoped>
._animate_fadeIn {
  animation: fadeIn 1.5s ease-out infinite;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    transform: scale(1);
    background-color: lightcoral;
  }
  40% {
    transform: scale(0.9);
    background-color: lightgreen;
  }
  100% {
    transform: scale(1);
    background-color: lightcoral;
  }
}
</style>
