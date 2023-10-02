<script lang="ts" setup>
import { ref } from 'vue'

const justify_content = ref('flex-start')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="justify_content">
      <el-radio label="flex-start">
        flex-start
      </el-radio>
      <el-radio label="flex-end">
        flex-end
      </el-radio>
      <el-radio label="center">
        center
      </el-radio>
      <el-radio label="space-between">
        space-between
      </el-radio>
      <el-radio label="space-around">
        space-around
      </el-radio>
      <el-radio label="space-evenly">
        space-evenly
      </el-radio>
    </el-radio-group>
    <div class="box">
      <div class="_item bg-img" data-index="1" />
      <div class="_item bg-img" data-index="2" />
      <div class="_item bg-img" data-index="3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: v-bind(justify_content);
}

._item {
  height: 80px;
  width: 80px;
  margin: 12px;
}
</style>
