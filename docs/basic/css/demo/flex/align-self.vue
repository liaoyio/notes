<script lang="ts" setup>
import { ref } from 'vue'

const align_self = ref('auto')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="align_self">
      <el-radio label="auto">
        auto
      </el-radio>
      <el-radio label="flex-start">
        flex-start
      </el-radio>
      <el-radio label="flex-end">
        flex-end
      </el-radio>
      <el-radio label="center">
        center
      </el-radio>
      <el-radio label="baseline">
        baseline
      </el-radio>
      <el-radio label="stretch">
        stretch
      </el-radio>
    </el-radio-group>
    <div class="box">
      <div class="item" data-index="1">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/12nvi.jpg">
      </div>
      <div class="item" data-index="2" :style="{ alignSelf: align_self }">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/13nvi.jpg">
      </div>
      <div class="item" data-index="3">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/14nvi.jpg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  gap: 2rem;
  display: flex;
  align-items: baseline;
  border-radius: 8px;
  height: 240px;
  outline: dashed 1px;
  .item {
    border-radius: 0 !important;
    padding-bottom: 10px;
    background: orangered;
    width: 100px;
  }
}
</style>
