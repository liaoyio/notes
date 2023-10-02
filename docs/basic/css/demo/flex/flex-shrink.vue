<script lang="ts" setup>
import { ref } from 'vue'

const flex_shrink = ref(1)
</script>

<template>
  <div class="flex flex-col">
    <el-radio-group v-model="flex_shrink">
      <el-radio :label="0">
        flex-shrink:0
      </el-radio>
      <el-radio :label="0.5">
        flex-shrink:0.5
      </el-radio>
      <el-radio :label="1">
        flex-shrink:1
      </el-radio>
      <el-radio :label="2">
        flex-shrink:2
      </el-radio>
    </el-radio-group>
    <div class="flex" style="width: 400px;">
      <div class="it">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/7nvi.jpg">
      </div>
      <div class="it" :style="{ flexShrink: flex_shrink }">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/6nvi.jpg">
      </div>
      <div class="it">
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
  height: 80px;
  min-width: 80px;
  width: 160px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 0;
  background-color: #818cf81a;
  background-image: linear-gradient(135deg, #6366f180 10%, #0000 0, #0000 50%, #6366f180 0, #6366f180 60%, #0000 0, #0000);
  background-size: 7.07px 7.07px;

  img{
    height: 80px;
    width: 80px;
    border-radius: 8px;
  }
}
</style>
