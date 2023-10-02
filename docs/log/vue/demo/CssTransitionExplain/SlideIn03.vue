<script setup lang="ts">
import { onBeforeUpdate, ref } from 'vue'

const slideInElRef = ref<HTMLDivElement[]>([])

function setSlideInElRef(dom: unknown) {
  slideInElRef.value?.push(dom as HTMLDivElement)
}
onBeforeUpdate(() => slideInElRef.value = [])

function onShowSlideIn() {
  // 给第一个元素加入幻灯片进入效果
  let animateClassName = '_animate_slideIn'
  slideInElRef.value![0].classList.contains(animateClassName) &&
    slideInElRef.value![0].classList.remove(animateClassName)
  // 给第二个元素加入幻灯片离开效果
  animateClassName = '_animate_slideOut'
  slideInElRef.value![1].classList.contains(animateClassName) &&
    slideInElRef.value![1].classList.remove(animateClassName)

  requestAnimationFrame(() => {
    slideInElRef.value![0].classList.add('_animate_slideIn')
    slideInElRef.value![1].classList.add('_animate_slideOut')
  })
}
</script>

<template>
  <div class="py-8 px-8 rounded-lg linear-gradient-blue flex flex-col  items-center">
    <el-button class="mb-8" @click="onShowSlideIn">
      演示幻灯片效果
    </el-button>
    <div class="flex w-full h-100px">
      <div :ref="setSlideInElRef" class="w-200px h-100px bgLightcoral flex_ccc">
        幻灯片A
      </div>
      <div :ref="setSlideInElRef" class="w-200px h-100px bgLightseagreen flex_ccc">
        幻灯片B
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgLightcoral {
  background-color: lightcoral;
  border-radius: 2px;
  transform: translateX(-100%);
  visibility: hidden;
}
.bgLightseagreen {
  background-color: #fff;
  border-radius: 2px;
  transform: translateX(-100%);
  visibility: visible;
}

._animate_slideIn {
  animation: slideIn 0.5s ease-in;
  animation-fill-mode: forwards;
}
._animate_slideOut {
  animation: slideOut 0.5s ease-in;
  animation-fill-mode: forwards;
}
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    visibility: visible;
  }
  to {
    transform: translateX(0);
    visibility: visible;
  }
}
@keyframes slideOut {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    visibility: hidden;
  }
}
</style>
