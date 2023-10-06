<!-- 函数式组件 -->
<script>
export default {
  // 开启函数式组件，函数式组件不会生成vue组件实例 (new VueComponent)
  functional: true,
  props: {
    count: Number,
  },
}
</script>

<template functional>
  <h1>NormalComp: {{ props.count }}</h1>
</template>
