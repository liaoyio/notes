---
title: 滚动条导致页面偏移
---

# css 滚动条导致页面偏移问题

## 问题描述

水平居中的元素因为纵向滚动条的出现，导致位置出现了偏移

## 问题重现

水平居中元素因为横向滚动条的出现和隐藏产生偏移（点击蓝色按钮可以看到效果）

水平居中通过 `margin:0 auto;` 实现

<preview path="./demo/scroll-bug/Scroll1.vue" />

水平居中通过 `display: flex;justify-content: center;` 实现

<preview path="./demo/scroll-bug/Scroll2.vue" />

## 问题原因

- 上面的居中是相当于视口的居中，而 `win` 的滚动条是需要占据视口宽度的（ `mac` 滚动条默认不占据视口宽度）。
- 因此当滚动条出现，那么视口就变窄了，那么原来居中元素的位置也需要重新调整

## 问题解决

### 1. 动态计算 margin-left

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const rows = ref<number>(0)
const onClick = () => rows.value = rows.value === 0 ? 10 : 0

const innerRef = ref<HTMLDivElement>()
const resizeObserver = new ResizeObserver(() => {
  if (!innerRef.value) return
  const { parentElement, offsetWidth } = innerRef.value
  const { offsetWidth: parentOffsetWidth } = parentElement as HTMLDivElement
  const marginLeft = (parentOffsetWidth - offsetWidth) / 2
  Object.assign(innerRef.value.style, { marginLeft: `${marginLeft}px` })
})

function onChangeWidth() {
  if (!innerRef.value) return
  const { offsetWidth } = innerRef.value
  if (offsetWidth === 300)
    Object.assign(innerRef.value.style, { width: '200px' })
  else
    Object.assign(innerRef.value.style, { width: '300px' })
}

onMounted(() => {
  if (!innerRef.value) return
  resizeObserver.observe(innerRef.value)
})
</script>

<template>
  <div class="w-400px mx-auto h-20px  bg-pink-400" />
  <div class="h-200px overflow-auto">
    <div ref="innerRef" class="w-400px mx-auto bg-blue-300">
      <div>
        <button class="succeed" @click="onClick">
          {{ rows !== 0 ? '恢复原状' : '加载更多' }}
        </button>
      </div>
      <div>
        <button class="succeed" @click="onChangeWidth">
          改变居中元素宽度
        </button>
      </div>
      <div class="text-lg py-2">
        下面是详情
      </div>
      <li v-for="idx in rows" :key="idx">
        {{ idx + 1 }} 这只伶俐的棕色狐狸跳过一只懒惰的狗
      </li>
    </div>
  </div>
</template>
```

### 2. 动态计算滚动条宽度

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const rows = ref<number>(0)
const onClick = () => rows.value = rows.value === 0 ? 10 : 0

const containerRef = ref<HTMLDivElement>()
const innerRef = ref<HTMLDivElement>()

const resizeObserver = new ResizeObserver(() => {
  if (!containerRef.value || !innerRef.value) return

  const { offsetWidth, clientWidth } = containerRef.value

  /* 计算滚动条的宽度 */
  const scrollBarWidth = offsetWidth - clientWidth
  Object.assign(containerRef.value.style, { paddingLeft: `${scrollBarWidth}px` })
})

function onChangeWidth() {
  if (!innerRef.value) return
  const { offsetWidth } = innerRef.value
  if (offsetWidth === 300)
    Object.assign(innerRef.value.style, { width: '200px' })
  else
    Object.assign(innerRef.value.style, { width: '300px' })
}

onMounted(() => {
  if (!containerRef.value) return
  resizeObserver.observe(containerRef.value)
})
</script>

<template>
  <div class="w-400px mx-auto h-20px  bg-pink-400" />
  <div ef="containerRef" class="h-200px overflow-auto flex justify-center">
    <div ref="innerRef" class="w-400px mx-auto bg-blue-300">
      <div>
        <button class="succeed" @click="onClick">
          {{ rows !== 0 ? '恢复原状' : '加载更多' }}
        </button>
      </div>
      <div>
        <button class="succeed" @click="onChangeWidth">
          改变居中元素宽度
        </button>
      </div>
      <div class="text-lg py-2">
        下面是详情
      </div>
      <li v-for="idx in rows" :key="idx">
        {{ idx + 1 }} 这只伶俐的棕色狐狸跳过一只懒惰的狗
      </li>
    </div>
  </div>
</template>
```

### 3.不使用浏览器默认滚动条

如：采用 el-scroll 这种 `js` 模拟浏览器滚动条的方案

:::tip 参考资料

[CSS 设计之页面滚动条出现时防止页面跳动的方法](https://zhuanlan.zhihu.com/p/114614689)

[解决滚动条突然出现导致的页面错位问题](https://www.cnblogs.com/zhangnan35/p/10730617.html)

[滚动条出现，挤压页面宽度，导致布局错乱的三种解决方法](https://blog.csdn.net/qq_36132291/article/details/115963653)

[获取滚动条的宽度](https://juejin.cn/post/6898935720522563597)

[JavaScript——获取浏览器滚动条(ScrollBar)宽度](https://blog.csdn.net/weixin_43272781/article/details/105174228)
:::
