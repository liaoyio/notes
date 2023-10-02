<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
function addNum() {
  num.value += 2
}
</script>

<template>
  <div class="component-preview">
    <p>Component Form</p>

    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <div>
      <span>新增：{{ num }}</span>
      <button class="buttons" @click="addNum">
        按钮
      </button>
    </div>
  </div>
</template>

<style scoped>
  .component-preview > p {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }

  .buttons {
    display: inline-block;
    padding: 0px 16px;
    border-radius: 4px;
    background: var(--vp-button-brand-bg);
    color: var(--vp-button-brand-text);
    border: 1px solid var(--vp-button-brand-border);
    margin-left: 40px;
  }
</style>
