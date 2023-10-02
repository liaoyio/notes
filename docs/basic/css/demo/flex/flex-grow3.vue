<script lang="ts" setup>
import { ref } from 'vue'

const flex_grow = ref(0.25)
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="flex_grow">
      <el-radio :label="0">
        flex-grow:0
      </el-radio>
      <el-radio :label="0.25">
        flex-grow:0.25
      </el-radio>
      <el-radio :label="0.5">
        flex-grow:0.5
      </el-radio>
      <el-radio :label="1">
        flex-grow:1
      </el-radio>
    </el-radio-group>
    <div class="box">
      <div class="it" data-index="1" style="flex-grow:0.25">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/7nvi.jpg">
      </div>
      <div class="it" data-index="2" :style="{ flexGrow: flex_grow }">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/6nvi.jpg">
      </div>
      <div class="it" data-index="3" style="flex-grow:0.25">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/9nvi.jpg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
}

.it {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  margin: 12px;
  background-color: #818cf81a;
  background-image: linear-gradient(135deg, #6366f180 10%, #0000 0, #0000 50%, #6366f180 0, #6366f180 60%, #0000 0, #0000);
  background-size: 7.07px 7.07px;

  img{
    border-radius: 8px;
    height: 100%;
  }
}
</style>
