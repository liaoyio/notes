---
title: 粘性页头 Sticky Header 吸顶效果
---

# 粘性定位吸顶效果 Sticky Header

## Header 默认显示在页面中，滑到某个位置时 `sticky`

:::code-group

```html [index.html]
<p style="margin-bottom:100px;">Scroll this page.</p>
<div class="sticky">
  <h3>Super amazing header</h3>
</div>
<p style="margin-top:500px;">Still there?</p>
<p style="margin-top:500px;">Yep!</p>
<p style="margin-top:500px;">Scroll so hard!</p>
```

```css [css]
body {
  margin: 0;
  text-align: center;
  font-family: sans-serif;
}
.fixed {
  position: fixed;
  top: 0;
}
.sticky {
  width: 100%;
  background: #f6d565;
  padding: 25px 0;
  text-transform: uppercase;
}
```


```js [js]
const sticky = document.querySelector('.sticky')
const origOffsetY = sticky.offsetTop

const onScroll = () => sticky.classList.toggle('fixed', window.scrollY >= origOffsetY)

document.addEventListener('scroll', onScroll)
```
:::


## `Header`默认不显示, 滑到某个位置时显示并 `sticky`


:::code-group
```html [index.html]
<div class="wrap"></div>
<div class="pin">hello</div>
```

```css [css]
* {
  margin: 0;
  padding: 0;
}
.wrap {
  height: calc(100vh + 100px);
  background-color: pink;
}
.pin {
  width: 100%;
  height: 50px;
  position: fixed;
  top: -50px;
  left: 0;
  transition: 0.3s all;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
}
.pin.show {
  top: 0;
  visibility: visible;
}
```

```js [js]
const pin = document.querySelector('.pin')

const onScroll = () => {
  const scrollY = window.scrollY
  pin.classList.toggle('show', scrollY >= 50)
}

window.addEventListener('scroll', onScroll)
```
:::


:::tip  参考资料

- [vue 实现导航栏吸顶效果 + 与内容联动](https://blog.csdn.net/sfyjknvcx/article/details/122211922)

- [Vue 事件监听实现导航栏吸顶效果](https://www.cnblogs.com/mouseleo/p/10948904.html)

- [Vue 开发——实现吸顶效果](https://juejin.cn/post/6844903662217625608)

- [Vue 实现吸顶的效果](https://blog.csdn.net/zbwroom/article/details/81911909)

- [Sticky Header 的两种实现方式](https://blog.csdn.net/Levis_1993/article/details/80702826)
:::
