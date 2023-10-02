<!--

@author: pan
@createDate: 2022-12-01 01:17
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const wowContainerElRef = ref<HTMLDivElement>()
const itemElRef = ref<HTMLParagraphElement>()
onMounted(() => {
  const wowContainerEl = wowContainerElRef.value
  const itemEl = itemElRef.value
  if (!wowContainerEl || !itemEl) return
  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        // console.log(change.time) // 发生变化的时间
        // console.log(change.rootBounds) // 根元素的矩形区域的信息
        // console.log(change.boundingClientRect) // 目标元素的矩形区域的信息
        // console.log(entry.intersectionRect) // 目标元素与视口（或根元素）的交叉区域的信息
        // console.log(change.intersectionRatio) // 目标元素与视口（或根元素）的相交比例
        // console.log(entry.intersectionRatio) // 目标元素与视口（或根元素）的交叉区域的信息
        // console.log(change.target) // 被观察的目标元素
        // console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > 0 && !entry.target.classList.contains('animate__animated')) {
          entry.target.classList.add('animate__animated', 'animate__fadeInDown')
        } else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove('animate__animated', 'animate__fadeInDown')
        }
      }
    },
    { root: wowContainerEl }
  )
  observer.observe(itemEl)
})
</script>

<template>
  <div class="container wowContainer" ref="wowContainerElRef">
    <p class="top">Top Wowjs</p>
    <p class="center" ref="itemElRef">Center Wowjs</p>
    <p class="bottom">Bottom Wowjs</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 200px;
  overflow: auto;
}
.center {
  margin-top: 160px;
  opacity: 0;
  width: 170px;
  height: 70px;
  background-color: red;
}
.bottom {
  margin-top: 200px;
}
</style>
