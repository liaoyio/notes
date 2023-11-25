# js 根据文本是否溢出 判断是否显示 `el-tooltip` 或 `title`


## 封装组件

```vue
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['title'])
const disabled = ref(true)

/** 获取dom的样式 */
const getStyle = (dom, attr) => getComputedStyle(dom, null)[attr]

const handleMouseenter = (e) => {
  if (!props.title) return

  const cellChild = e.target.children[0]

  /** range 表示文档的一个区域 */
  const range = document.createRange()
  range.setStart(cellChild, 0)
  range.setEnd(cellChild, cellChild.childNodes.length)

  const flag = getStyle(cellChild, '-webkit-line-clamp')

  if (flag === 'none') {
    /** rangeWidth 表示元素内容的宽度 */
    const rangeWidth = range.getBoundingClientRect().width

    const pl = getStyle(cellChild, 'paddingLeft')
    const pr = getStyle(cellChild, 'paddingRight')
    const padding = Number.parseInt(pl) + Number.parseInt(pr)

    /**
     * cellChild.offsetWidth 表示选定区域的宽度
     * 如果 元素内容的宽度 > (选定区域的宽度 - padding值) 就显示 tooltip
     */
    if (rangeWidth > cellChild.offsetWidth - padding) {
      // 显示 tooltip
      disabled.value = false
    }
  }
  else {
    /** rangeHeight 表示元素内容的高度 */
    const rangeHeight = range.getBoundingClientRect().height

    const pt = getStyle(cellChild, 'paddingTop')
    const pb = getStyle(cellChild, 'paddingBottom')
    const padding = Number.parseInt(pt) + Number.parseInt(pb)

    // cellChild.offsetHeight 表示选定区域的高度
    if (rangeHeight > cellChild.offsetHeight - padding) {
      // 显示tooltip
      disabled.value = false
    }
  }
}

const mouseleave = () => disabled.value = true
</script>

<template>
  <div @mouseenter="handleMouseenter" @mouseleave="mouseleave">
    <ElTooltip placement="top" :disabled="disabled" :content="props.title">
      <slot />
    </ElTooltip>
  </div>
</template>
```


### 使用

<!-- <script setup>
import TooltipUse from './demo/TooltipUse.vue';
</script> 

<DemoBlack path="TooltipUse.vue">
  <TooltipUse/>
</DemoBlack> -->
<preview path="./demo/TooltipUse.vue"  />
