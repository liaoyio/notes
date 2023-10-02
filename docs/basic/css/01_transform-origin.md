---
title: transform-origin 详解
---
# transform-origin 详解

## transform-origin 是做什么的?

用于指定变换的原点位置, 默认为`center`, 所有的 css 变换，都是基于原点进行的，也就是基于`transform-origin`指定的位置进行的.

**通俗的说，就是能够控制动画的方向**

:::tip 参考资料
[MDN transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
:::


<preview path="./demo/Base.vue" />


### 转换原点为中心点

:::tip 
- `紫色 ⭕️`是`transform-origin`的默认位置，在 `x` 轴和 `y` 轴，都是元素的中心
- `橘黄色虚线边框` 表示原本正方形原本的位置
-  将鼠标移入背景色为 `蓝色` 方块，查看效果
:::

<br/>

<preview path="./demo/Demo10.vue" />
<preview path="./demo/Demo11.vue" />

### 转换原点为左上点
<br/>

<preview path="./demo/Demo20.vue" />
<preview path="./demo/Demo21.vue" />

### 转换原点为右上点


<preview path="./demo/Demo30.vue" />
<preview path="./demo/Demo31.vue" />

### 转换原点为右下点
<br/>

<preview path="./demo/Demo40.vue" />
<preview path="./demo/Demo41.vue" />

### 转换原点为左下点
<br/>

<preview path="./demo/Demo50.vue" />
<preview path="./demo/Demo51.vue" />
