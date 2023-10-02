<!--
淡出效果
@author: pan
@createDate: 2022-11-30 15:08
-->
<script setup lang="ts">
import { ref } from 'vue'

const show = ref<boolean>(false)
function onToggle(toggle: boolean) {
  show.value = toggle
}
</script>

<template>
  <div class="p-8 rounded-lg linear-gradient-blue flex flex-col items-center min-h-40">
    <h4>使用Transition标签实现：淡出</h4>
    <div class="flex gap-3 my-4">
      <el-button type="primary" @click="onToggle(true)">
        淡出
      </el-button>
      <el-button @click="onToggle(false)">
        显示
      </el-button>
    </div>
    <Transition>
      <div v-if="show" class="w-60  bg-purple-500 h-20 rounded" />
    </Transition>
  </div>
</template>


<style lang="scss" scoped>
.container {
  height: 146px;
}
.rect {
  width: 150px;
  height: 80px;
  background-color: lightgreen;
  margin-top: 10px;
}

// 动效class
// 这里可以认为是对元素离开前的样式描述
.v-leave-from {
  opacity: 1;
}
// 这里可以认为是从from样式转换到to样式的过渡方式与过渡用时的描述
.v-leave-active {
  transition: opacity 1s ease-in;
}
// 这里可以认为是对元素进入后的样式描述
.v-leave-to {
  opacity: 0;
}
</style>
