# 写给自己看的flex布局

**如何创建 flex 布局?**

- 给`div`这类块状元素元素设置`display:flex`
- 给`span`这类内联元素设置`display:inline-flex`

其中，直接设置 `display:flex | inline-flex` 的元素称为flex容器，里面的子元素称为`flex`子项。

:::tip `flex`和`inline-flex`的区别
`inline-flex`容器为`inline`特性，因此可以`和图片文字一行显示`；
`flex` 容器保持块状特性，宽度默认100%，`不和内联元素一行显示`。
:::

<preview path="./demo/flex/flex-box.vue" />

## flex 相关属性分类 

`flex`布局相关属性正好分为两拨，一拨作用在`flex`容器上，还有一拨作用在`flex子项`上。

具体参见下表，点击可快速索引。

[点我跳转：基础功能](#基础功能)


作用在flex容器上
- [`👉🏻 flex-direction`](#flex-direction)
- [`👉🏻 flex-wrap`](#flex-wrap)
- [`👉🏻 flex-flow`](#flex-flow)
- [`👉🏻 justify-content`](#justify-content)
- [`👉🏻 align-items`](#align-items)
- [`👉🏻 align-content`](#align-content)

作用在flex子项上
- [👉🏻 `order` 👉🏻](#order)
- [👉🏻 `flex-grow`](#flex-grow)
- [👉🏻 `flex-shrink`](#flex-shrink)
- [👉🏻 `flex-basis`](#flex-basis)
- [👉🏻 `flex`](#flex)
- [👉🏻 `align-self`](#align-self)

## 作用在 flex 容器上的CSS属性

### flex-direction

:::details
`flex-direction` 用来控制子项整体布局方向，是从左往右还是从右往左，是从上往下还是从下往上。

语法如下:

```css
flex-direction: row | row-reverse | column | column-reverse;
```

- `row`: 默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。
- `row-reverse`: 显示为行。但方向和row属性值是反的。
- `column`: 显示为列。
- `column-reverse`: 显示为列。但方向和column属性值是反的。
:::

<preview path="./demo/flex/flex-direction.vue" />

### flex-wrap


:::details

`flex-wrap` 用与控制子项整体单行显示还是换行显示，如果换行，则下面一行是否反方向显示。

> 在CSS世界中，只要看到单词 `wrap` 一定是与换行显示相关的，如: `word-wrap` 、 `white-space: nowrap` 、 `pre-wrap`。

语法如下：

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

- `nowrap`: 默认值，表示单行显示，不换行。`很容易出现宽度溢出的场景`。
- `wrap`: 宽度不足换行显示。
- `wrap-reverse`: 宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面。
:::

<preview path="./demo/flex/flex-warp.vue" />

### flex-flow

:::details

`flex-flow`属性是`flex-direction`和`flex-wrap`的缩写，表示flex布局的flow流动特性，语法如下：

```css
flex-flow: <‘flex-direction’> || <‘flex-wrap’>

/** 举个例子，容器元素如下设置 */
.container {
    display: flex;
    flex-flow: row-reverse wrap-reverse;
}
```
:::

<preview path="./demo/flex/flex-flow.vue" />

### justify-content

:::details

`justify-content`属性决定了水平方向子项的对齐和分布方式。

> CSS `text-align` 有个属性值为 `justify`，可实现两端对齐，所以，当我们想要控制 `flex` 元素的水平对齐方式的时候，记住 `justify` 这个单词，`justify-content`属性也就记住了。

语法如下：
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

- `flex-start`: 默认值。逻辑CSS属性值，与文档流方向相关。默认表现为左对齐。
- `flex-end`: 逻辑CSS属性值，与文档流方向相关。默认表现为右对齐。
- `center`: 表现为居中对齐。
- `space-between`: 表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配。
- `space-around`: `around`是环绕的意思，意思是每个`flex子项`两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。
- `space-evenly`: `evenly`是匀称、平等的意思。也就是视觉上，每个 `flex子项` 两侧空白间距完全相等。
:::

<preview path="./demo/flex/justify-content.vue" />


### align-items

:::details
`align-items`中的`items`指的就是`flex子项`们，因此`align-items`指的就是`flex子项们`相对于`flex`容器在垂直方向上的对齐方式。

语法如下：
```css
align-items: stretch | flex-start | flex-end | center | baseline;
```

- `stretch`: 默认值。flex子项拉伸。 `如果flex子项设置了高度，则按照设置的高度值渲染，而非拉伸`。
- `flex-start`: 容器顶部对齐。
- `flex-end`: 容器底部对齐。
- `center`: 垂直居中对齐。
- `baseline`: 表现为所有flex子项都相对于flex容器的基线（字母x的下边缘）对齐。
:::

<preview path="./demo/flex/align-items.vue" />


### align-content

:::details
`align-content`可以看成和`justify-content`是相似且对立的属性，`justify-content`指明水平方向`flex子项`的对齐和分布方式，而`align-content`则是指明`垂直方向每一行flex元素`的对齐和分布方式。注意: `如果所有flex子项只有一行，align-content 没有任何效果`。

语法如下：
```css
align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;
```

`stretch`: 默认值。每一行flex子元素都等比例拉伸。例如，如果共两行flex子元素，则每一行拉伸高度是50%。
`flex-start`: 表现为`顶部堆砌`。
`flex-end`: 表现为`底部堆放`。
`center`: 表现为整体垂直居中对齐。
`space-between`: 表现为上下两行两端对齐。剩下每一行元素等分剩余空间。
`space-around`: 每一行元素上下都享有独立不重叠的空白空间。
`space-evenly`: 每一行元素都完全上下等分。
:::

<preview path="./demo/flex/align-content.vue" description="给flex容器设置高度500像素，点击下面对应单选框，可以看到实时的布局效果." />


## 作用在flex子项上的CSS属性

### order

:::details
我们可以通过设置`order`改变某一个`flex子项`的排序位置。

```css
order: <integer>; /* 整数值，默认值是 0 */
```

所有flex子项的`默认order属性值是0`，因此，如果我们想要某一个flex子项在最前面显示，可以设置比0小的整数，如-1就可以了。
:::

<preview path="./demo/flex/order.vue" description="下面flex容器有5个子元素，现在，我们给第3个子元素设置order属性值，看看其排列位置有何变化。点击下面的单选框，可以看到实时的交互效果：" />


### flex-grow

:::details
`flex-grow`属性中的`grow`是扩展的意思，扩展的就是flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。

```css
flex-grow: <number>; /* 数值，可以是小数，默认值是 0 */
```
`flex-grow` 不支持负值，默认值是`0`，表示不占用剩余的空白间隙扩展自己的宽度。如果`flex-grow`大于0，则flex容器`剩余空间的分配`就会发生。
:::



<preview path="./demo/flex/flex-grow.vue" />


<preview path="./demo/flex/flex-grow2.vue" description="flex容器有3个子元素，现在，我们仅给第2个子元素设置flex-grow属性值，看看其占据尺寸有何变化。点击下面的单选框，可以看到实时的交互效果:" />

<preview path="./demo/flex/flex-grow3.vue" description="flex容器有3个子元素，默认所有子项都设置了flex-grow:0.25，现在我们点击下面的单选框，改变第2个子元素的flex-grow属性值，看看其占据尺寸有何变化：" />

:::tip
此实例演示中，因为3个子项都是`0.25`，因此默认还剩余`25%`的剩余空间；如果我们选择`flex-grow:`0，则加起来的`flex-grow`是`0.5`，因此`剩余50%`空间；如果我们选择`flex-grow:0.5`，则加起来的`flex-grow`是`1`，因此`没有剩余空间`，同时空间占用比例为`1:2:1`，最终效果符合此预期；如果我们选择`flex-grow:1`，则加起来的`flex-grow大于1`，剩余空间按比例分配，为`1:4:1`，最终效果也确实如此。
:::

### flex-shrink


:::details
`shrink`是`收缩`的意思，`flex-shrink`主要处理当`flex容器空间不足`时候，单个元素的收缩比例。

**`flex-shrink`跟`flex-grow`很神似:**

- `flex-grow` 是空间足够时候如何利用空间;
- `flex-shrink` 则是空间不足时候如何收缩腾出空间.

```css
flex-shrink: <number>; /* 数值，默认值是 1 */
```
`flex-shrink` 不支持负值，默认值是1，也就是默认`所有的flex子项都会收缩`。如果设置为0，则表示不收缩，保持原始的`fit-content`宽度。
:::

<preview path="./demo/flex/flex-shrink.vue" description="" />


### flex-basis

:::details

`flex-basis`定义了在分配剩余空间之前元素的默认大小。相当于对浏览器提前告知：浏览器兄，我要占据这么大的空间，提前帮我预留好。

```css
flex-basis: <length> | auto; /* 默认值是 auto */
```

默认值是auto，就是自动。有设置`width`则占据空间就是`width`，没有设置就按内容宽度来。


- 如果同时设置`width`和`flex-basis`，会忽略`width`。
- flex顾名思义就是弹性的意思，因此，实际上不建议对flex子项使用width属性，因为不够弹性。
- 当剩余空间不足的时候，flex子项的实际宽度并通常不是设置的`flex-basis`尺寸，因为flex布局剩余空间不足的时候默认会收缩。

:::

实例一则：

<preview path="./demo/flex/flex-basis.vue" description="flex容器有3个子元素，现在，我们给第2个子元素设置不同的`flex-basis`属性值，看看其占据尺寸有何变化。点击下面的单选框，可以看到实时的交互效果：" />



### flex

:::details

`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`的缩写。

```css
flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
- 其中`第2`和`第3`个参数（flex-shrink和flex-basis）是可选的。默认值为`0 1 auto`。
:::
<preview path="./demo/flex/flex.vue" />


### align-self

:::details
`align-self`指控制单独某一个flex子项的垂直对齐方式。

> 写在`flex容器`上的这个`align-items`属性，后面是`items`，有个`s`，`表示子项们`，`是全体`；这里是`self`，单独一个个体。其他区别不大，语法几乎一样:

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

唯一区别: `align-self`多了个`auto`（默认值），表示继承自flex容器的`align-items`属性值。
:::

<preview path="./demo/flex/align-self.vue" description="首先我们设置flex容器baseline对齐，然后点击下面的单选框，给第2个flex子项设置不同align-self属性值，观察其表现:" />
