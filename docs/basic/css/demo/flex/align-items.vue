<script lang="ts" setup>
import { ref } from 'vue'

const align_items = ref('stretch')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="align_items">
      <el-radio label="stretch">
        stretch
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
    </el-radio-group>
    <div class="box">
      <div class="item" data-index="1">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/12nvi.jpg">
      </div>
      <div class="item" data-index="2">
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
  display: flex;
  gap: 3rem;
  align-items: v-bind(align_items);
  .item {
    background: orangered;
    min-width: 160px;
    img{
      border-radius: 8px;
    }
  }
}
</style>
