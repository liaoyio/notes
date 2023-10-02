
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'


const titleDomOffsetTopArr: number[] = []
const titleArrRef = ref<HTMLDivElement[]>([])
const stickyIndex = ref<number>(1)
// 竖向滚动条宽度
const scrollBarWidth = ref<number>(0)
const JsStickyRef = ref<HTMLElement>()

function calcTitleDomOffsetTopArr() {
  titleArrRef.value.forEach((titleDom) => {
    titleDomOffsetTopArr.push(titleDom.offsetTop)
  })
}

onMounted(() => {
  calcTitleDomOffsetTopArr()
  const JsStickyDom = JsStickyRef.value
  if (!JsStickyDom) return
  calcScrollBarWidth(JsStickyDom)
})

const scrollBarWidthStr = computed<string>(() => `${scrollBarWidth.value}px`)

/** 计算竖向滚动条宽度 */
function calcScrollBarWidth(scrollDom: HTMLElement) {
  const { offsetWidth, clientWidth } = scrollDom
  // 计算滚动条的宽度
  const tmp = offsetWidth - clientWidth
  if (tmp !== scrollBarWidth.value) scrollBarWidth.value = tmp
}

function onScroll(evt: UIEvent) {
  const scrollDom = evt.target as HTMLElement
  if (!scrollDom) return
  calcScrollBarWidth(scrollDom)
  const { scrollTop } = scrollDom
  stickyIndex.value = findStickIndex(scrollTop, titleDomOffsetTopArr) as number
}

function findStickIndex(scrollTop: number, offsetTopArr: number[]) {
  if (scrollTop <= 0) return 1

  let start = 0
  let end = offsetTopArr.length
  let ret: number = end - 1
  while (start <= end) {
    const middle = Math.trunc((start + end) / 2)
    const middlePos = middle === 0 ? 0 : middle - 1
    const offsetTop = offsetTopArr[middlePos]
    if (offsetTop === scrollTop) {
      return middle
    }
    else if (scrollTop < offsetTop) {
      if (ret === undefined || ret > middle)
        ret = middle

      end = middle - 1
    }
    else if (scrollTop > offsetTop) {
      ret = middle
      start = middle + 1
    }
  }
  return ret
}
</script>

<template>
  <div class="relative">
    <div ref="JsStickyRef" class="js-sticky" @scroll="onScroll">
      <template v-for="i in 10" :key="i">
        <template v-if="i <= 3">
          <div ref="titleArrRef" :class="{ sticky: stickyIndex === i }" class="title">
            索引行{{ i }}
          </div>

          <ul>
            <li v-for="j in 3" :key="j" class="item">
              第{{ `${i}-${j}` }}项目
            </li>
          </ul>
        </template>

        <template v-else-if="i >= 7">
          <div ref="titleArrRef" :class="{ sticky: stickyIndex === i }" class="title">
            索引行{{ i }}
          </div>

          <ul>
            <li v-for="j in 2" :key="j" class="item">
              第{{ `${i}-${j}` }}项目
            </li>
          </ul>
        </template>

        <template v-else>
          <div ref="titleArrRef" :class="{ sticky: stickyIndex === i }" class="title">
            索引行{{ i }}
          </div>

          <ul>
            <li v-for="j in 15" :key="j" class="item">
              第{{ `${i}-${j}` }}项目
            </li>
          </ul>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.js-sticky {
  @apply h-300px w-full overflow-auto;
  /*  24px 是第一个 title 元素的实际高度 */
  padding-top: 24px;

  .title {
    @apply w-full bg-blue-500 px-2 py-2 rounded text-sm text-white;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    .item:last-child {
      border-bottom: none;
    }
  }
  .item {
    @apply w-full text-base py-2 last:border-none;
    @apply border-b-2 border-b-red-400;
    border-bottom-style: dashed
  }
  .sticky {
    position: absolute;
    top: 0;
    /* 吸顶元素的宽度为：100% - 滚动条宽度 */
    width: calc(100% - v-bind(scrollBarWidthStr));
  }
}
</style>
