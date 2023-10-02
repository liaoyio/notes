---
title: 索引组件滚动高亮
---


# 索引组件滚动高亮


## JS、CSS 实现粘性布局 & 吸顶效果
### 前置知识点

<br />

#### 一、 `el.offsetParent` 与 `el.offsetTop`


1. `element.offsetParent` 为包含 `element` 的祖先元素中，层级最近的定位元素。 

- 也就是说, `offsetParent` 必须满足三个条件:
    - 是 `element` 的`祖先`元素
    - 最靠近 `element`
    - 是定位元素, 即 `position` 属性不为 `static`

2. `element.offsetTop` 是当前元素顶部到 `element.offsetParent` 顶部的距离.


#### 二、 sticky

**sticky 不生效原因有：**

- 父元素设置了 `overflow:hidden` 或 `overflow:auto`
- 未指定 `top`、`right`、`bottom`、`left` 4个值中的任意一个
- 父元素高度小于 `sticky` 定位的元素高度
- `sticky` 属性依赖于用户的滚动，在 `position:relative `与 `position:fixed `定位之间切换。
- 元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

**sticky 属性仅在以下几个条件都满足时有效：**

- 父元素不能 `overflow:hidden` 或者 `overflow:auto` 属性
- 必须指定 `top`、`bottom`、`left`、`right` 4 个值之一，否则只会处于相对定位
- 父元素的高度不能低于 `sticky` 元素的高度

## 实现索引组件滚动高亮

<preview path="./demo/sticky-demo/css.vue" title="css 实现粘性布局" />

:::details 优缺点

- **优点：** 实现简便

- **缺点：**
  1. 存在兼容性问题。sticky 基本只能兼容 2021 年开始版本的浏览器 [can i use: sticky](https://caniuse.com/?search=sticky)
  2. 吸顶元素与内容元素距离顶部有大概 `1px` 的间隙
:::

<preview path="./demo/sticky-demo/JsSticky1.vue" title="js 实现粘性布局 | 版本一 " />

:::tip **要点**

- 最外层的盒子是相对定位, 为了让`title`元素能获取到距离滚动容器顶部的距离，用于在滚动的时候，能够判断当前应该让哪个`title`元素设置为绝对定位
- `js-sticky` 是滚动容器

**优点：** 兼容性强

**缺点：**
- 实现相对复杂
- 吸顶元素与同类未吸顶元素宽度不一致
:::

<preview path="./demo/sticky-demo/JsSticky2.vue"  title="js 实现粘性布局 | 版本二"  description="简单修复 `吸顶元素与同类未吸顶元素宽度不一致` 问题（通过计算出滚动条宽度方式修复" />

:::tip 参考资料

- [使用 position:sticky 实现粘性布局](https://www.cnblogs.com/coco1s/p/6402723.html)

- [MDN: position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

- [absolute 固定在滚动容器里面失效](https://www.jianshu.com/p/f0999824e2dc)

- [offsetParent、offsetLeft/offsetTop 深度剖析](https://juejin.cn/post/6844903745512275981)
:::


### 实现 HTML 结构与数据初始化

:::warning
不要通过`css position` 的`sticky` 实现`，因为 `sticky` 定位会导致`offsetTop` 为 0
:::


<preview path="./demo/index-comp/IndexComp01.vue" />

### 实现滚动高亮

<preview path="./demo/index-comp/IndexComp02.vue" />

### 点击左侧索引，右侧自动跳转到对应位置

<preview path="./demo/index-comp/IndexComp03.vue" />

### 实现左侧高亮索引，始终显示在视口中

<preview path="./demo/index-comp/IndexComp04.vue" />
