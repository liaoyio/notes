<script>
import MyUseModel from './UseVModel.vue'
import NoVModel from './NoVModel.vue'

export default {
  components: { MyUseModel, NoVModel },
}
</script>

<template>
  <div class="app-container">
    <MyUseModel />
    <NoVModel />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}
.container {
  margin: 1em;
  flex: 1 0 auto;
}
</style>
