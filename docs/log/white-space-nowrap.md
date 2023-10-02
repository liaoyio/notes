---
title: 
---

# white-space-nowrap 撑出了滚动条但撑不开盒子的宽度 ?

## BUG 复现

<preview path="./demo/WsBug.vue" />

:::warning 问题描述

上面的代码实现了一个左右布局的主体页面, 左侧内容的 `li` 设置了`white-space:nowrap`, 目的是使文字不换行, 如果文字很多超过了父容器的宽度, 那就会出现横向滚动条。
:::

以上都还是符合预期的, 不符合预期的是`white-space:nowrap`撑出了横向滚动条, 但却没能撑开`li`和`ul`的宽度, 导致`ul`的宽度始终是没出现滚动条时的宽度, 由于`li`的宽度继承自`ul`, 所以`li`的宽度也被限制在了没有横向滚动条时的宽度. 由于对`li`加了`border-bottom: 1px solid #333;`, 此时就会发现这条黑色的下划线没有像预期中的充满整个宽度。

### 如何解决?

### 方案一

:::tip
使用  `display: inline-block + min-width:100% + min-height:100%`
:::

<preview path="./demo/WsBugFix01.vue" />

### 方案二

:::tip
`设置ul的min-width: max-content`
:::

<preview path="./demo/WsBugFix02.vue" />


:::info 两种方案如何选择哪个?
从 can i use 网站看`min-height`, `min-width`的兼容性是强于`max-content`的, 从这点看个人更倾向使用方案一, 但方案二明显又更简单, 所以, 如果在实际项目中可以忽略兼容问题, 那优先采用方案二, 如果兼容问题无法避免, 那就采用方案一。
:::details 参考 🔗
- [min-height 兼容性](https://caniuse.com/?search=min-height)
- [min-width 兼容性](https://caniuse.com/?search=min-width)
- [max-conetnt 兼容性](https://caniuse.com/?search=max-content)
:::
