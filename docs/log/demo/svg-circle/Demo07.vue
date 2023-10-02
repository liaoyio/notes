<script setup lang="ts">
/**
 * 计算圆相关属性
 * @param {number} r 圆半径
 * @param {number} strokePercent  有色边框长度占圆周长的百分比(是个小数0-1表示0%-100%)
 */
function calc(r: number, strokePercent: number, strokeWidth: number) {
  /**  圆周长*/
  const C = 2 * Math.PI * r
  /** 圆实线边框的长度. 这里设置为周长的80% */
  const stroke = C * strokePercent
  /** 空白边框的长度。这里表示 周长-实现边框的长度剩下的长度都是空白边框 */
  const blankLen = C - stroke
  /** 计算stroke的偏移量，使的环的缺口在正下方 */
  const offset = -C / 4 - blankLen / 2 - strokeWidth / 2 / 2 + 1
  return { stroke, blankLen, offset }
}

const r = 40
const strokeWidth = 10
const { stroke, blankLen, offset } = calc(r, 0.65, strokeWidth)

const r2 = 40
const strokeWidth2 = 5
const { stroke: stroke2, blankLen: blankLen2 } = calc(r2, 0.5, strokeWidth2)

const offset2 = offset
</script>

<template>
  <div class="linear-gradient-pink w-full h-60 rounded-lg flex_ccc">
    <div class="w-200px h-200px mx-auto">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" style="stop-color: red" />
            <stop offset="100%" style="stop-color: yellow" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          :r="r"
          :stroke-dasharray="`${stroke} ${blankLen}`"
          stroke="rgba(255, 255, 255, 0.4)"
          :stroke-width="strokeWidth"
          fill="none"
          :stroke-dashoffset="offset"
          stroke-linecap="round"
        />
        <circle
          cx="50"
          cy="50"
          :r="r2"
          :stroke-dasharray="`${stroke2} ${blankLen2}`"
          stroke="url(#gradient)"
          :stroke-width="strokeWidth2"
          fill="none"
          :stroke-dashoffset="offset2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
