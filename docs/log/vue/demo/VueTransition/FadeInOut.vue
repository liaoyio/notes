<script setup lang="ts">
import { ref } from 'vue'

const show = ref<boolean>(false)
function onToggle(toggle: boolean) {
  show.value = toggle
}
</script>

<template>
  <div class="p-8 rounded-lg linear-gradient-blue flex flex-col items-center min-h-40">
    <h4>使用Transition标签实现：淡入淡出</h4>
    <div class="flex gap-3 my-4">
      <el-button type="primary" @click="onToggle(true)">
        淡入
      </el-button>
      <el-button @click="onToggle(false)">
        淡出
      </el-button>
    </div>
    <Transition>
      <div v-if="show" class="w-60  bg-red-400 h-20 rounded" />
    </Transition>
  </div>
</template>


<style lang="scss" scoped>
// 动效class
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-in;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
