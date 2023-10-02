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
/* 计算stroke的偏移量，使的环的缺口在正下方 */
const offset = -C / 4 - blankLen / 2 + 4
</script>

<template>
  <div class="linear-gradient-pink w-full h-60 rounded-lg flex_ccc">
    <div class="w-200px h-200px mx-auto">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- stroke-dashoffset表示stroke的偏移量，负数表示顺时针偏移，正数则逆时针偏移，0表示不偏移 -->
        <!-- stroke-linecap表示边框的风格，这里表示圆角边框，圆角的半径由stroke-width控制 -->
        <circle
          cx="50"
          cy="50"
          r="45"
          :stroke-dasharray="`${stroke} ${blankLen}`"
          stroke="white"
          stroke-width="5"
          fill="none"
          :stroke-dashoffset="offset"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
