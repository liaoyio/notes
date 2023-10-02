<template>
  <div class="flex flex-col gap-4 rounded-lg p-5 bg-gradient-to-r from-purple-500 to-pink-500">
    <p class="text_flex">
      flex实现: 这段文字能不能这样判断一下，当文字不足一行时，让它居中显示，当文字超过一行就让它居左
    </p>
    <p class="text_grid">
      grid实现:这段文字能不能这样判断一下，当文字不足一行时，让它居中显示，当文字超过一行就让它居左
    </p>
  </div>
</template>

<style scoped>
.text_flex{
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 15px rgba(0,0,0,.1);
  padding: 15px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  color: rgba(60, 60, 67);
}
.text_grid{
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 15px rgba(0,0,0,.1);
  padding: 15px;
  font-size: 14px;
  display: grid;
  justify-items: center;
  color: rgba(60, 60, 67);
}
</style>
