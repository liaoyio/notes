<script setup lang="ts">
/** 圆半径*/
const r = 48
/** 圆周长*/
const C = 2 * Math.PI * r
/** 圆实线边框的长度. 这里设置为周长的80% */
const stroke = C * 0.7
/** 空白边框的长度。这里表示 周长-实现边框的长度剩下的长度都是空白边框*/
const blankLen = C - stroke
// console.log(C, stroke, blankLen) // 301.59289474462014 211.1150263212341 90.47786842338604
</script>

<template>
  <div class="linear-gradient-pink w-full h-60 rounded-lg flex_ccc">
    <div class="w-200px h-200px mx-auto">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

        <!-- stroke-dasharray 有两个参数时:
        表示先绘制第一个参数单位的非空白边框，
        再绘制第二个参数的空白边框，然后如此循环往复，
        直至绘制完整个圆的边框 -->

        <!-- 因为当前 stroke-dasharray 的第一个参数和第二个参数是根据圆的周长计算出来的，
          因此体现出的效果就是圆的边框分为了两部分，
          一部分是有填充颜色的，一部分是没有填充颜色的，
          也就是半环的效果 -->

        <!-- 因为stroke起始位置为右侧中间，因此从右侧中间开始顺时针方向画有填充颜色的边框，
          再画无填充颜色的边框，直至填充完整个圆的周长 -->
        <circle
          cx="50"
          cy="50"
          r="48"
          :stroke-dasharray="`${stroke} ${blankLen}`"
          stroke="white"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </div>
  </div>
</template>
