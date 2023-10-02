<script setup lang="ts">
import { ref } from 'vue'

const flex = ref('row')
</script>

<template>
  <div>
    <div class="ls">
      <div class="pb-2">
        flex 默认值为 <code> flex: 0 1 auto; </code>
      </div>
      <div class="bg-stripes-indigo" style="flex: 0 1 auto">
        <div class="light-nth">
          01
        </div>
        <div class="light-nth" style="flex: 0 1 auto">
          02
        </div>
        <div class="light-nth" style="flex: 0 1 auto">
          03
        </div>
      </div>
      <div class="pt-8 pb-2">
        给第2、3个子元素设置<code>flex: 1</code> 等同于 <code>flex: 1 1 0%;</code>
      </div>
      <div class="bg-stripes-indigo flex">
        <div class="it">
          01
        </div>
        <div class="light-nth" style="flex: 1;">
          02
        </div>
        <div class="light-nth" style="flex: 1;">
          03
        </div>
      </div>

      <div class="pt-8 pb-2">
        给第1、2个子元素设置<code>flex: none;</code> 等同于 <code>flex:0 0 auto</code>
      </div>
      <div class="bg-stripes-indigo">
        <div class="light-nth" style="flex: none; width: 100px;">
          01
        </div>
        <div class="light-nth" style="flex: none;">
          02
        </div>
        <div class="it" style="flex: 1;">
          03
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls {

  border-radius: 0.5rem;
  padding: 2rem;
  .bg-stripes-indigo {
    background-color: #818cf81a;
    background-image: linear-gradient(135deg, #6366f180 10%, #0000 0, #0000 50%, #6366f180 0, #6366f180 60%, #0000 0, #0000);
    background-size: 7.07px 7.07px;
    display: flex;
    gap: 1rem;
    color: #fff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    border-radius: 0.5rem;
  }

  .light-nth {
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6466e9;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
}
.it {
  padding: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  flex: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a8b4f6;
}
</style>
