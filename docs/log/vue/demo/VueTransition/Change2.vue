<script setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>

<template>
  <div class="py-8 rounded-lg linear-gradient-blue ">
    <div class="">
      <span>点击切换状态 👉 :</span>
      <Transition name="slide-up" mode="out-in">
        <button v-if="docState === 'saved'" @click="docState = 'edited'">
          编辑
        </button>
        <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
          保存
        </button>
        <button v-else-if="docState === 'editing'"  @click="docState = 'saved'">
          取消
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
button{
  border: 1px solid white;
  color: white !important;
  border-radius: 3px;
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
