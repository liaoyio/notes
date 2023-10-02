---
title: Vue Transition 标签
---
# Vue Transition & TransitionGroup 组件

### 作用 & 触发条件

:::tip 作用
在一个元素或组件进入和离开`DOM`时应用动画
:::

组件的进入或离开可以由以下的条件之一触发

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由 `<component>` 切换的动态组件

当一个 `<Transition>` 组件中的元素被插入或移除时，会发生下面这些事情：

1. Vue 会自动检测目标元素是否应用了 `CSS` 过渡或动画。如果存在，则一些 `CSS` 过渡 `class` 会在适当的时机被添加和移除。
2. 如果有作为监听器的 `JavaScript` 钩子，这些钩子函数会在适当时机被调用。
3. 如果没有探测到 `CSS` `过渡`或`动画`、也没有提供 `JavaScript` 钩子，那么 `DOM` 的插入、删除操作将在浏览器的下一个动画帧后执行。

###  触发时机

从上面可以得知，动效的触发条件是 `组件的进入或离开`, 组件进入和组件离开又各自分为 3 个阶段, `开始 -> 进行中 -> 结束`, vue 会在每个阶段，给`<Transition>` 组件中的元素，应用不同的 `class`

![An image](../images/transition.png)

**`Enter`**: 表示组件的进入

- v-enter-from: 组件进入的开始状态
- v-enter-active: 组件进入的进行中状态
- v-enter-to: 组件进入的结束状态

**`Leave`**: 表示组件的离开

- v-leave-from: 组件离开的开始状态
- v-leave-active: 组件离开的进行中状态
- v-leave-to: 组件离开的结束状态

:::details  **上面的`v`可以看作是动效的默认命名**, 什么意思？
就是指 `vue` 会在 `组件进入` 的开始状态给组件添加 `v-enter-from` 的 `class`, 组件进入的进行中状态给组件添加`v-enter-active`的 class, 组件进入的结束状态给组件添加`v-enter-to`的 class, `组件离开`也会用同样的规则给组件依次添加`v-leave-from`, `v-leave-active`, `v-leave-to`
:::

###  如何设置动效的 `class` 类

**可以通过 `Transition` 标签的 `name` 属性修改`v`的默认命名**

```js
<Transition name="fade">... </Transition>
```

上面的例子，则 vue 会找如下命名的 class

```
fade-enter-from
fade-enter-active
fade-enter-to

fade-leave-from
fade-leave-active
fade-leave-to
```

###  多 DOM 切换之元素间过渡

除了通过 `v-if / v-show` 切换一个元素，我们也可以通过 `v-if / v-else / v-else-if` 在几个组件间进行切换，只要确保任一时刻只会有一个元素被渲染即可：

<preview path="./demo/VueTransition/Change1.vue"  description="点击切换状态，不同状态显示不同按钮" />

:::warning 注意:
上面的例子，进入和离开的元素都是在同时开始动画的，因此必须将它们设为 `position: absolute;` 以避免二者同时存在时出现的布局问题。
:::

### 多 DOM 切换之过渡模式

使用 `mode`属性设置过渡模式:

- `default`: 进入动效和离开动效，同时执行
- `in-out`:  先执行进入动效，再执行俩开动效
- `out-in`:  先执行离开动效，再执行进入动效

<preview path="./demo/VueTransition/Change1.vue" description="点击切换状态，不同状态显示不同按钮,请注意分辨与上一个示例的不同之处" />


### component 动态组件切换

<preview path="./demo/VueTransition/MutilComp.vue" description="多个Vue组件交替出现" />


### 动画实例

####  淡入

<preview path="./demo/VueTransition/FadeIn.vue"  description="仅实现了淡入动效(进入动效), 且只设置了透明度" />

####  淡出

<preview path="./demo/VueTransition/FadeOut.vue"  description="仅实现了淡出动效(离开动效), 且只设置了透明度" />

#### 淡入淡出

<preview path="./demo/VueTransition/FadeInOut.vue" description="同时设置了进入动效和离开动效" />

## TransitionGroup 标签

###  作用和特点

**作用**：用于给一组元素添加动效

- 默认情况下，它不会渲染一个容器元素。但你可以通过传入 `tag` `prop` 来指定一个元素作为容器元素来渲染。
- 过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换
- 列表中的每个元素都必须有一个独一无二的 `key` `attribute`。
- CSS过渡 `class` 会被应用在列表内的元素上，而不是容器元素上。

当在 `DOM` 模板中使用时，组件名需要写为 `<transition-group>`。

<preview path="./demo/VueTransition/Group.vue" description="这里为了保证移除元素的丝滑，增加了一个.fade-move的过渡" />
