<template>
  <div class="p-5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
    <div class="content">
      <p class="text">
        这段文字能不能这样判断一下，当文字不足一行时，让它居中显示，当文字超过一行就让它居左
      </p>
    </div>
  </div>
</template>

<style scoped>
.content{
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 15px rgba(0,0,0,.1);
  padding: 15px;
  font-size: 14px;
  color: rgba(60, 60, 67);
}
.text{
  display: table;
  margin: 0 auto;
}
</style>
