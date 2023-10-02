<template>
  <div class="py-8  rounded-lg linear-gradient-blue flex flex-col px-8">
    <div class="rect bg-light-500 ease">
      ease(速度从快逐渐变慢)
    </div>
    <div class="rect bg-orange-500  linear">
      linear(匀速)
    </div>
    <div class="rect bg-blue-500 ease-in">
      ease-in(速度越来越快)
    </div>
    <div class="rect bg-purple-500 ease-out">
      ease-out(速度越来越慢)
    </div>
    <div class="rect bg-pink-500 ease-in-out">
      ease-in-out(速度先加速再减速)
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rect {
  width: 190px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.ease {
  animation: test 10s ease infinite;
}
.linear {
  animation: test 10s linear infinite;
}
.ease-in {
  animation: test 10s ease-in infinite;
}
.ease-out {
  animation: test 10s ease-out infinite;
}
.ease-in-out {
  animation: test 10s ease-in-out infinite;
}
@keyframes test {
  0% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
