<!-- 对比普通组件和函数式组件 -->
<script>
import NormalComp from './NormalComp.vue'
import FunctionalComp from './FunctionalComp.vue'

export default {
  components: {
    NormalComp,
    FunctionalComp,
  },
  data() {
    return {
      functionalCount: 0,
      normalCount: 0,
    }
  },
  mounted() {
    // window.vm = this
  },
}
</script>

<template>
  <div class="demo text-center">
    <button @click="normalCount = 10000">生成10000个普通组件</button>
    <button @click="functionalCount = 10000">生成10000个函数组件</button>

    <div class="_container">
      <div class="item">
        <NormalComp v-for="n in normalCount" :key="n" :count="n" />
      </div>
      <div class="item">
        <FunctionalComp
          v-for="n in functionalCount"
          :key="n"
          :count="n"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
._container {
  width: 90%;
  display: flex;
  margin: 0 auto;
}
.item {
  padding: 30px;
  border: 1px solid #ccc;
  margin: 1em;
  flex: 1 1 auto;
  max-height: 80vh;
  overflow-y: scroll;
}
</style>
