<script lang="ts" setup>
import { ref } from 'vue'

const align_content = ref('stretch')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="align_content">
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
      <div class="item_1" data-index="1" />
      <div class="item_1" data-index="2" />
      <div class="item_1" data-index="3" />
      <div class="item_1" data-index="4" />
      <div class="item_1" data-index="5" />
      <div class="item_1" data-index="6" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: 300px;
  flex-wrap: wrap;
  border-radius: 8px;
  outline: 1px dotted;
  display: flex;
  align-content: v-bind(align_content);
}

.item_1 {
  height: 80px;
  width: 80px;
  margin: 12px;
}
</style>
