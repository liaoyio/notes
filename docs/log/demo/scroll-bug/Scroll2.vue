<script setup lang="ts">
import { ref } from 'vue'

const rows = ref<number>(0)
const onClick = () => rows.value = rows.value === 0 ? 10 : 0
</script>

<template>
  <div class="w-400px mx-auto h-20px bg-pink-400" />
  <!-- 设置 flex 布局 和  justify-content: center; -->
  <div class="h-200px overflow-auto flex justify-center ">
    <div class="w-400px mx-auto bg-blue-300">
      <button class="succeed" @click="onClick">
        {{ rows !== 0 ? '恢复原状' : '加载更多' }}
      </button>
      <div class="text-lg py-2">
        下面是详情
      </div>
      <li v-for="idx in rows" :key="idx">
        {{ idx + 1 }} 这只伶俐的棕色狐狸跳过一只懒惰的狗
      </li>
    </div>
  </div>
</template>
