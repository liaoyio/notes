<!--

@author: pan
@createDate: 2022-12-01 18:18
-->
<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
import { onMounted } from 'vue'

let myAnimation: anime.AnimeInstance
let animateExecuting = false
function onStart() {
  if (animateExecuting) return
  animateExecuting = true
  myAnimation.play()
}
/**
 * 暂停
 *
 * @return  {[type]}  [return description]
 */
function onPause() {
  myAnimation.pause()
}

/**
 * 反转执行动画
 *
 * @return  {[type]}  [return description]
 */
function onReverse() {
  // 告知animejs下次执行时，需要按反转执行动画
  myAnimation.reverse()
  onStart()
}
onMounted(() => {
  myAnimation = anime({
    targets: ['.blue', '.green'],
    translateX: '300px',
    rotate: 360,
    borderRadius: 100,
    duration: 2000,
    // loop: true,
    autoplay: false,
    //   easing: 'easeInOutExpo',
    complete: () => {
      animateExecuting = false
    },
  })
})
</script>

<template>
  <el-button @click="onStart">开始</el-button>
  <el-button @click="onPause">暂停</el-button>
  <el-button @click="onReverse">反转执行动画</el-button>
  <div class="anime">
    <div class="wCen">
      <div class="blue">
        <div class="ball"></div>
      </div>
      <div class="green">
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.anime {
  padding: 100px 0;
  .blue,
  .green {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    padding: 10px 0 0 10px;
    .ball {
      width: 30px;
      height: 30px;
      border-radius: 20px;
      background-color: #fff;
    }
  }
  .blue {
    background-color: blue;
  }
  .green {
    background-color: limegreen;
  }
}
</style>
