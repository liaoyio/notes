---
title: css动效分析
---

# css 动效分析

## 淡入/淡出

**普通淡入:** 淡入就是 DOM 元素透明度从 0-1

<preview path="./demo/CssTransitionExplain/FadeIn01.vue"  />

**从上方淡入:** translateY 从-100%到 0 (-100%可以根据实际需要指定，下面的例子设置的是-30%)

<preview path="./demo/CssTransitionExplain/FadeIn02.vue"  />

**从下方淡入:** translateY 从 100%到 0 (100%可以根据实际需要指定，下面的例子设置的是 30%)

<preview path="./demo/CssTransitionExplain/FadeIn03.vue"  />

**从左边淡入:** translateX 从 -100%到 0 (-100%可以根据实际需要指定，下面的例子设置的是 -30%)

<preview path="./demo/CssTransitionExplain/FadeIn04.vue"  />

**从右边淡入:** translateX 从 100%到 0 (100%可以根据实际需要指定，下面的例子设置的是 30%)

<preview path="./demo/CssTransitionExplain/FadeIn05.vue"  />

**从右下边淡入:** translate(100%,100%) 从 translate(0,0) (100%可以根据实际需要指定，下面的例子设置的是 30%)

<preview path="./demo/CssTransitionExplain/FadeIn06.vue"  />

## 幻灯片切换

**原理：** DOM 元素位置变化

**原理:** `translateX从-100%到0`

<preview path="./demo/CssTransitionExplain/SlideIn01.vue" description="幻灯片左侧进入" />

**原理:** `translateX从100%到0`

<preview path="./demo/CssTransitionExplain/SlideIn02.vue" description="幻灯片右侧进入" />

<preview path="./demo/CssTransitionExplain/SlideIn03.vue"  />

## 放大/缩小

**原理:** 通过设置 scale 完成

<preview path="./demo/CssTransitionExplain/ScaleIn01.vue"  />

<preview path="./demo/CssTransitionExplain/ScaleIn02.vue"  />

## 保持最后的状态

但上面两个实例，在缩放完成之后，又变回了原来的大小(初始状态)，那么怎么保持最后的状态呢?

可以通过`animation-fill-mode:forwards`属性控制

```
animation-fill-mode : none | forwards | backwards | both;

值          描述
none        不改变默认行为。
forwards    当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
backwards   在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
both        向前和向后填充模式都被应用。
```

<preview path="./demo/CssTransitionExplain/ScaleIn03.vue"  />

`通过设置:animation: fadeIn 1.5s ease-out infinite;   的infinite达到无限循环的目的`

<preview path="./demo/CssTransitionExplain/ScaleIn04.vue"  />

## 动画速度控制

animation-timing-function, transition-timing-function 两者的属性取值一样，共有 5 种

| 属性/方法   | 是否默认值 | 说明                                 |
| ----------- | ---------: | ------------------------------------ |
| ease        |         是 | 速度从快到逐渐变慢                   |
| linear      |         否 | 速度保持匀速                         |
| ease-in     |         否 | 速度越来越快(称之为渐显效果)         |
| ease-out    |         否 | 速度越来越慢(称之为渐隐效果)         |
| ease-in-out |         否 | 速度先加速再减速(称之为渐显渐隐效果) |

<preview path="./demo/CssTransitionExplain/AnimationAll.vue"  />
