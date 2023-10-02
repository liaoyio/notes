<script lang="ts" setup>
import { ref } from 'vue'

const flex_direction = ref('row')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="flex_direction">
      <el-radio label="row">
        row
      </el-radio>
      <el-radio label="row-reverse">
        row-reverse
      </el-radio>
      <el-radio label="column">
        column
      </el-radio>
      <el-radio label="column-reverse">
        column-reverse
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
  flex-direction: v-bind(flex_direction);
}

._item {
  height: 80px;
  width: 80px;
  margin: 12px;
}
</style>
