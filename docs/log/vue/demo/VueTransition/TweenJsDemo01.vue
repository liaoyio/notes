<!--
tween.js 实现数字过渡：从startNum过渡到endNum
@author: pan
@createDate: 2022-12-01 17:11
-->
<script setup lang="ts">
import TWEEN from '@tweenjs/tween.js'
import { ref } from 'vue'

// 开始数字
const startNum = 100
const num = ref<number>(startNum)
// 结束数字
const endNum = 150
const tween = new TWEEN.Tween({ num: startNum }).to({ num: endNum }, 5000).onUpdate(function (object) {
  num.value = Math.round(object.num)
})
function animate(time?: number) {
  console.log(time)
  if (TWEEN.update(time)) {
    requestAnimationFrame(animate)
  }
}
function onStart() {
  tween.start()
  animate()
}
</script>

<template>
  <el-button @click="onStart">开始</el-button>
  <div>数值: {{ num }}</div>
</template>

<style lang="scss" scoped></style>
