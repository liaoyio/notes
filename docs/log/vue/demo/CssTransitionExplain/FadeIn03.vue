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
      演示从下方淡入
    </el-button>
    <div ref="fadeInElRef" class="w-50 h-25  bg-white rounded-lg flex_ccc">
      从下方淡入
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customBtn {
  margin-bottom: 30px;
}
.rect {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
}
._animate_fadeIn {
  animation: fadeIn 0.5s ease-in;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
