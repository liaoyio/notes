<!--
通过内建的 <TransitionGroup> 实现“FLIP”列表过渡效果。
https://aerotwist.com/blog/flip-your-animations/
-->

<script setup lang="ts">
import { shuffle } from 'lodash-es'
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
let id = getInitialItems().length + 1

const items = ref(getInitialItems())

const insert = () => {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

const  reset = () => items.value = getInitialItems()

const shuffleFn = () =>  {
  items.value = shuffle(items.value)
}

const  remove = (item)  => {
  const i =  items.value.indexOf(item)
  if (i > -1)
    items.value.splice(i, 1)
}
</script>

<template>
  <div class="px-5 py-3">
    <el-button class="mr-3" @click="insert">
      随机一个位置插入一个元素
    </el-button>
    <el-button class="mr-3" @click="reset">
      重置
    </el-button>
    <el-button class="mr-3" @click="shuffleFn">
      随机变化位置
    </el-button>
  </div>
  <TransitionGroup tag="ul" name="fade" class="relative p-0 text-blue-gray-900">
    <div v-for="item in items" :key="item" class="w-full py-2 px-4 bg-warm-gray-100 border border-red-300 border-solid flex items-center">
      <div class="min-w-4 ">
        {{ item }}
      </div>
      <button class="flex_ccc  w-6 h-6 border rounded-full hover:bg-purple-300 border-purple-500 border-solid ml-7" @click="remove(item)">
        x
      </button>
    </div>
  </TransitionGroup>
</template>

<style scoped>
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
  以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
