<script lang="ts" setup>
import { ref } from 'vue'

const flex_basis = ref('128px')
</script>

<template>
  <div class="flex-dome">
    <el-radio-group v-model="flex_basis">
      <el-radio label="80px">
        flex-basis:80px
      </el-radio>
      <el-radio label="128px">
        flex-basis:128px
      </el-radio>
      <el-radio label="256px">
        flex-basis:256px
      </el-radio>
      <el-radio label="512px">
        flex-basis:512px
      </el-radio>
    </el-radio-group>
    <div class="box">
      <div class="it" data-index="1">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/7nvi.jpg">
      </div>
      <div class="it" data-index="2" :style="{ flexBasis: flex_basis }">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/6nvi.jpg">
      </div>
      <div class="it" data-index="3">
        <img src="https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/wk/2023/user/9nvi.jpg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
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
