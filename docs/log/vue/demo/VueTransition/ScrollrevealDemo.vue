<!--

@author: pan
@createDate: 2022-12-01 15:36
-->
<script setup lang="ts">
import scrollReveal from 'scrollreveal'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const _scrollReveal = scrollReveal()
const containerElRef = ref<HTMLDivElement>()
onBeforeUnmount(() => {
  // 清除scrollReveal生成的样式以及监听器，并销毁scrollReveal内部的store
  _scrollReveal.destroy()
})
onMounted(() => {
  // 设置需要添加动效的元素。支持：css选择器 | 单个dom元素 | dom节点集合 |  dom节点数组 |
  const target = '.contentP'
  _scrollReveal.reveal(target, {
    container: containerElRef.value!,
    // 动画的时长
    duration: 500,
    // 延迟时间
    delay: 200,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: true,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: '-20px',
    // 其他可用的动画效果
    opacity: 0.1,
    // 执行速度 线性函数啥的
    easing: 'ease',
    // 执行方式（初始缩放大小）
    scale: 0.8,
    // 使用执行之前的回调函数
    beforeReveal: function (ele) {
      //   console.log(1)
    },
  })
})
</script>

<template>
  <div class="container" ref="containerElRef">
    <p class="contentA contentP">内容A</p>
    <p class="contentB contentP">内容B</p>
    <p class="contentC contentP">内容C</p>
    <p class="contentD contentP">内容D</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: auto;
  height: 400px;
  width: 400px;
}
.contentP {
  margin-bottom: 300px;
  width: 200px;
  height: 150px;
  background-color: pink;
  color: #000;
  &:last-child {
    margin: 0;
  }
}
</style>
