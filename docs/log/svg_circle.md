---
title: 环形统计条
---

# SVG 实现环形统计条

## 画一个圆

<preview  path="./demo/svg-circle/Demo01.vue" />

:::tip
1. `viewBox` 用于指定`svg`的视口从左顶点位置以及视口的宽高
  - 指定了viewBox属性之后, 视口内的元素都会被平铺满整个svg容器 (自适应父级盒子大小)
  - 指定了viewBox属性之后, `svg` 元素默认会充满整个容器

2. `circle`画圆: `cx`，`xy` 指定圆心的`x`, `y`坐标, `r` 指定圆的半径
3. `stroke`: 指定边框颜色 
4. `stroke-width`: 用于指定边框的宽度
5. `fill` 用于指定填充色
:::

``` vue
<template>
  <div class="w-200px h-200px mx-auto">
    <!-- 当前的viewBox设置表示，视口的左上点0，0开始，视口的宽高都为100个单位 -->
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- 这里cx,cy为50，因为viewBox的宽高为100，所以这里实际是将圆心设置在了视口的正中心 -->
      <circle cx="50" cy="50" r="48" stroke="green" stroke-width="2" fill="black" />
      <!--
        将 svg 元素想象成一个矩形的话，那么圆心距离上下左右边的距离都是50，
        这将 r 设置为48实际表示圆的半径为48，因为stroke-width为2，所以，还有2个单位的边框，
        因此48+2就让这个圆内容和边框占满了svg元素的视口
      -->
    </svg>
  </div>
</template>
```

## 画一个只有描边的圆

<preview  path="./demo/svg-circle/Demo02.vue" />




## 画一个半圆

<preview  path="./demo/svg-circle/Demo03.vue" />

<preview  path="./demo/svg-circle/Demo04.vue" />

<preview  path="./demo/svg-circle/Demo05.vue" />

## 加入渐变

<preview  path="./demo/svg-circle/Demo06.vue" />

## 双层圆实现进度效果

<preview  path="./demo/svg-circle/Demo07.vue" />

<preview  path="./demo/svg-circle/Demo08.vue" />

<preview  path="./demo/svg-circle/Demo09.vue" />

## 加入文字

<preview  path="./demo/svg-circle/Demo10.vue" />

:::tip  参考资料

- [Texts 文字](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts)

- [填充和边框](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes)

- [渐变](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients)

- [circle 圆](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/circle)

- [viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)

- [svg 之 ViewBox 详解,秒懂 SVG 里的 viewbox](https://blog.csdn.net/zp19860529/article/details/114173594)

- [SVG 学习之 stroke-dasharray 和 stroke-dashoffset 详解](https://www.cnblogs.com/daisygogogo/p/11044353.html)

- [svg 中 viewbox 图解分析](https://zhuanlan.zhihu.com/p/422609203)

- [svg 渐变环形进度条组件](https://www.jianshu.com/p/bfa223894867)

- [寥寥数行 SVG 实现圆环 loading 或倒计时效果](https://www.zhangxinxu.com/wordpress/2015/07/svg-circle-loading/)

- [关于 SVG 渐变，我所能告诉你的一切](https://zhuanlan.zhihu.com/p/69553595)

- [教你用 svg 写个环形进度条 vue 组件](https://juejin.cn/post/7026929956605132837)
:::
