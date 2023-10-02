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
      <div class="container">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- 设置一个红黄渐变 -->
            <linearGradient id="gradient">
              <stop offset="0%" style="stop-color: red" />
              <stop offset="100%" style="stop-color: yellow" />
            </linearGradient>
          </defs>

          <!-- 应用红黄渐变'url(#gradient)' -->
          <circle
            cx="50"
            cy="50"
            r="45"
            :stroke-dasharray="`${stroke} ${blankLen}`"
            stroke="url(#gradient)"
            stroke-width="5"
            fill="none"
            :stroke-dashoffset="offset"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
