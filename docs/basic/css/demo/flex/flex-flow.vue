<template>
  <div class="flex-dome">
    <div class="box">
      <div class="item_1" data-index="1" />
      <div class="item_1" data-index="2" />
      <div class="item_1" data-index="3" />
      <div class="item_1" data-index="4" />
      <div class="item_1" data-index="5" />
      <div class="item_1" data-index="6" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-flow: row-reverse wrap-reverse;
}

.item_1 {
  height: 80px;
  width: 80px;
  margin: 12px;
}
</style>
