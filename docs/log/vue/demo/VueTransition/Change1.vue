<script setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>

<template>
  <div class="p-8 rounded-lg linear-gradient-blue ">
    <div class="" style="position: relative;">
      <span class="text-white mr-4">点击右侧文字切换状态 👉 </span>
      <Transition name="slide-up">
        <button v-if="docState === 'saved'" @click="docState = 'edited'">
          编辑
        </button>
        <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
          保存
        </button>
        <button v-else-if="docState === 'editing'" @click="docState = 'saved'">
          取消
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
button {
  position: absolute;
  border: 1px solid white;
  border-radius: 3px;
  color: white !important;
  padding: 5px 15px;
  width: 100px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
