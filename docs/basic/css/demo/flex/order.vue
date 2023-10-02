<script lang="ts" setup>
import { ref } from 'vue'

const order_num = ref(-1)
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="order_num">
      <el-radio :label="-1">
        order:-1
      </el-radio>
      <el-radio :label="0">
        order:0
      </el-radio>
      <el-radio :label="1">
        order:1
      </el-radio>
    </el-radio-group>

    <div class="box">
      <div class="child" data-index="1" />
      <div class="child" data-index="2" />
      <div class="child" data-index="3" :style="{ order: order_num }" />
      <div class="child" data-index="4" />
      <div class="child" data-index="5" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
}

.child {
  height: 80px;
  width: 80px;
}
</style>
