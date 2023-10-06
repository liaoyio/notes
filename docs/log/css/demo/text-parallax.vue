<template>
  <div class="min-h-40vh bg-[#ebe7e1] rounded-lg px-6 py-30 flex_ccc">
    <h1 class="parallel">
      parallel Background
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.parallel {
  /* background: linear-gradient(#fe4e00 50%,lightblue 50%)
  center center / 60vw 60vh fixed; */
  background: linear-gradient(#fe4e00 50%, #0000 50%) center center / 100vw 100vh fixed;
  // height: 100vh;
  /* 设置文字颜色为透明 */
  color: transparent;
  /* 让背景图填充到文字上 */
  background-clip: text;
  -webkit-background-clip: text;
  /* 设置文本描边 */
  -webkit-text-stroke: 2px #fe4e00;
}
h1{
  letter-spacing: normal;
  line-height: 1;
  font-size: 60px;
  font-family: Inter;
  font-weight: 700;
}
</style>
