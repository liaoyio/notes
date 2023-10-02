<script lang="ts" setup>
import { defineComponent, h, ref } from 'vue'

const activeComponent = ref('CompA')
</script>

<script  lang="ts">
const CompA =  defineComponent({
  render : () => h('div', { class: 'py-10 px-20 bg-blue rounded flex_ccc' }, 'Component A'),
})
const CompB =  defineComponent({
  render : () => h('div', { class: 'py-10 px-20 bg-red rounded flex_ccc' }, 'Component B'),
})

export default {
  components: { CompA, CompB },
}
</script>

<template>
  <div class="py-8  rounded-lg linear-gradient-blue flex flex-col items-center">
    <div class="flex items-center pb-6">
      <label>
        <input v-model="activeComponent" type="radio" value="CompA"> A组件
      </label>
      <label>
        <input v-model="activeComponent" type="radio" value="CompB"> B组件
      </label>
    </div>
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" />
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
