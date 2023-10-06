# CSS 技巧总结

## CSS单行文字时居中，多行文字时居左

1. 父级 `text-align:center`，子级 `inline-block` + `text-align:left`

<preview path="./demo/TextLeft1.vue" />


2. `width:fit-content` + `margin:auto`

<preview path="./demo/TextLeft2.vue" />

3. `position:relative `+ `transform`
<preview path="./demo/TextLeft3.vue" />

4. `display:table` + `margin:auto`
<preview path="./demo/TextLeft4.vue" />

5. `flex` 和 `grid` 实现
<preview path="./demo/TextLeft5.vue" />

## CSS实现文本两端对齐

在移动端表单UI中, 表单设计稿通常是左侧 `label` 文字左右对齐的效果,很长的一段时间里,我都是使用手动加 `空格`的方式來实现,这种方案虽然也能完成,但是不够优雅.

### 1. 使用空格实体字符实现文本两端对齐
<preview path="./demo/text-justify-align.vue" />

### 2. 使用 text-align:justify 
<preview path="./demo/text-justify-align2.vue" />

## 文字视差效果

<preview path="./demo/text-parallax.vue" />
