---
title: CSS 实现树状组织架构图
---

# CSS 实现树状组织架构图

## 普通的树结构

<preview class="my-2" path="./demo/css-tree/Demo01.vue" />
<preview path="./demo/css-tree/Demo11.vue" />


::: warning 实现原理
- 通过 `ul` `li` 实现层级结构
- 通过 `before` 和 `after` 实现连接线
:::


### 分步实现
<br/>

#### 使用 `ul` `li` 实现层级结构
<preview path="./demo/css-tree/Demo03.vue" />



#### 使用 `before` 伪类画出横线
<preview path="./demo/css-tree/Demo04.vue" />



#### 使用 `after` 伪类画出竖线
<preview path="./demo/css-tree/Demo05.vue" />



#### 隐藏每个 `ul` 下的最后一个直属孩子 `li` 🏷️ 的 `after` 伪类效果
<preview  path="./demo/css-tree/Demo06.vue" />


#### 修改 `after` 伪类的 `height` 值
<preview path="./demo/css-tree/Demo07.vue" />



#### 修改 最外层第一个 `li` 的 `after` 伪类的 `top` 和 `height` 值
<preview path="./demo/css-tree/Demo08.vue" />



## ✍️ 改进 ｜ 连线处带弧度 

### 最外层 `ul` 的第一个 `li` 和每层 `ul` 最后一个 `li` 的横线带弧度
<preview path="./demo/css-tree/Demo09.vue" />


### 创建竖直连线
<preview path="./demo/css-tree/Demo10.vue" />



## 组织架构/家族树

<preview path="./demo/css-tree/org-tree/Demo09.vue" />

### `html` 结构

<preview path="./demo/css-tree/org-tree/Demo01.vue" />

### 基于 flex 布局实现层级结构,并居中对齐
<preview path="./demo/css-tree/org-tree/Demo03.vue" />

### 去除 `li` 边框 , 给`a` 加上边框, 各个层级之间加入间隔
<preview path="./demo/css-tree/org-tree/Demo05.vue" />

### 加入横向连线

通过`li`的`after`,`before`设置横向连接线

<preview path="./demo/css-tree/org-tree/Demo06.vue" />

解决横向连线间的缝隙：通过调整右上连线的 `width` 和 `left`

<preview path="./demo/css-tree/org-tree/Demo07.vue" />

### 加入竖向连线

通过`ul`的`after`,`before`辅助解决竖向连线问题

<preview path="./demo/css-tree/org-tree/Demo08.vue" />

最终效果

<preview path="./demo/css-tree/org-tree/Demo09.vue" />

### 另一种方式

<preview path="./demo/css-tree/org-tree/Demo10.vue" />

### 横向

<preview path="./demo/css-tree/org-tree/Demo11.vue" />

<preview path="./demo/css-tree/org-tree/Demo12.vue" />

:::tip 参考资料

[我开源了一个基于 Vue 的组织架构树组件](https://zhuanlan.zhihu.com/p/280770752)

[Tree 树形控件](http://www.longstudy.club/vue-okr-tree-doc/index.html)

[基于 Vue 的组织架构树组件](https://juejin.cn/post/6844903519309283335)

[动手实现一个组织架构图](https://juejin.cn/post/6945440171185668110)
:::
