<script setup lang="ts">
import {  onMounted, ref } from 'vue'

const titleDomOffsetTopArr: number[] = []
const titleArrRef = ref<HTMLDivElement[]>([])
const stickyIndex = ref<number>(1)

const calcTitleDomOffsetTopArr = () => titleArrRef.value.forEach(titleDom => titleDomOffsetTopArr.push(titleDom.offsetTop))

onMounted(() => calcTitleDomOffsetTopArr())

function onScroll(evt: UIEvent) {
  const scrollDom = evt.target as HTMLElement
  if (!scrollDom) return
  const { scrollTop } = scrollDom
  stickyIndex.value = findStickIndex(scrollTop, titleDomOffsetTopArr) as number
}

function findStickIndex(scrollTop: number, offsetTopArr: number[]) {
  /** 二分查找/折半查找 */
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
    <div class="css-sticky" @scroll="onScroll">
      <template v-for="i in 10" :key="i">
        <h6
          ref="titleArrRef"
          :class="{ sticky: stickyIndex === i }"
          class="title"
        >
          索引行{{ i }}
        </h6>
        <ul>
          <li v-for="j in 15" :key="j" class="item">
            🎲 第{{ `${i}-${j}` }}项目
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.css-sticky {
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
    @apply w-full flex flex-col text-base py-2;
    @apply border-b-2 border-b-red-400;
    border-bottom-style: dashed
  }

  .sticky {
    position: absolute;
    top: 0;
  }
}
</style>
