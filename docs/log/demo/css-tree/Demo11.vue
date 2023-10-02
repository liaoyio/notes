<script setup>
const list = [
  {
    text: '1 级菜单',
    children: [
      { text: '2 级菜单' },
      {
        text: '2 级菜单',
        children: [{ text: '3 级菜单' }, { text: '3 级菜单' }],
      },
    ],
  },
  {
    text: '1 级菜单',
    children: [{ text: '2 级菜单' }, { text: '2 级菜单' }],
  },
  { text: '1 级菜单' },
]
</script>

<template>
  <ul class="css-tree">
    <li v-for="(lv1, v1idx) in list" :key="v1idx">
      {{ lv1.text }}
      <ul>
        <li v-for="(lv2, v2idx) in lv1.children" :key="v2idx" class="child">
          {{ lv2.text }}
          <ul>
            <li v-for="(lv3, v3idx) in lv2.children" :key="v3idx" class="child">
              {{ lv3.text }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.css-tree {
  ul {
    margin-top: 0 !important;
  }

  li {
    list-style-type: none;
    position: relative;
    margin-top: 0 !important;

    /* 横线直连 */
    &::before {
      position: absolute;
      content: '';
      width: 12px;
      height: 1px;
      border-top: 2px solid #eb3b5a;
      left: -15px;
      top: 12px;
    }

    /* 竖直连线 */
    &::after {
      position: absolute;
      content: '';
      width: 1px;
      /* 高度需要大于自身，否则会有空隙 */
      height: calc(100% + 3px);
      border-right: 2px solid #eb3b5a;
      left: -15px;
      top: 0;
    }
  }

  .child {
    margin-left: 12px;
  }
}

/*  去除每层ul最后一个li 竖直连线  */
.css-tree  li:last-child::after {
  display: none;
}

.css-tree > li:first-child::after {
  // height: calc(100% - 14px);
  top: 18px;
}

// 最外层ul第一个li横线带弧度
.css-tree > li:first-child::before {
  height: 10px;
  border-top-left-radius: 5px;
  border-left: 2px solid #eb3b5a
}

// 每层ul最后一个li横线带弧度
.css-tree li:last-child::before {
  height: 10px;
  border-top: none;
  border-bottom: 2px solid #eb3b5a;
  top: 3px;
  border-bottom-left-radius: 5px;
  border-left: 2px solid #eb3b5a;
}
</style>
