<script setup lang="ts">
import Tooltip from './ToolTip.vue'
</script>

<template>
  <div class="flex flex-col gap-4 divide-y-2 divide-blue ">
    <Tooltip title="这是一条测试">
      <p class="w-100px overflow !m-0">
        这是一条测试
      </p>
    </Tooltip>

    <Tooltip title="这只伶俐的棕色狐狸跳过一只懒惰的狗">
      <p class="w-100px overflow !m-0">
        这只伶俐的棕色狐狸跳过一只懒惰的狗
      </p>
    </Tooltip>

    <Tooltip title="这只伶俐的棕色狐">
      <p class="w-100px overflow !m-0">
        这只伶俐的棕色狐狸跳过一只懒惰的狗abcdefghijklmnopqrstuvwxyz
      </p>
    </Tooltip>

    <Tooltip title="这只伶俐的棕色狐狸跳过一只懒惰的狗abcdefghijklmnopqrstuvwxyz">
      <p class="w-100px overflow !m-0">
        这只伶俐的棕色狐狸跳过一只懒惰的狗abcdefghijklmnopqrstuvwxyz
      </p>
    </Tooltip>
  </div>
</template>

<style lang="scss" scoped>
.overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
