<script lang="ts" setup>
import { ref } from 'vue'

const flex_wrap = ref('nowrap')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="flex_wrap">
      <el-radio label="nowrap">
        nowrap
      </el-radio>
      <el-radio label="wrap">
        wrap
      </el-radio>
      <el-radio label="wrap-reverse">
        wrap-reverse
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
  display: flex;
  flex-wrap: v-bind(flex_wrap);
}

.item_1 {
  height: 80px;
  width: 80px;
  margin: 12px;
}
</style>
