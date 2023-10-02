<template>
  <ul class="domtree">
    <li>
      1级菜单
      <ul>
        <li>2级菜单</li>
        <li>
          2级菜单
          <ul>
            <li>3级菜单</li>
            <li>3级菜单</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      1级菜单
      <ul>
        <li>2级菜单</li>
        <li>2级菜单</li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  margin-top: 0 !important;
}
li {
  list-style-type: none;
  position: relative;
  margin-top: 0 !important;
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 1px;
    border-top: 2px solid #eb3b5a;
    left: -15px;
    top: 12px;
  }
  // 竖直连线
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% + 3px);
    border-right: 2px solid #eb3b5a;
    left: -15px;
    top: 0;
  }
}
ul ul li {
  margin-left: 10px;
}
ul > li:last-child::after {
  display: none;
}

ul.domtree > li:first-child::after {
  height: calc(100% - 14px);
  top: 18px;
}
// 最外层ul第一个li横线带弧度
ul.domtree > li:first-child::before {
  height: 10px;
  border-top-left-radius: 5px;
  border-left: 2px solid #eb3b5a;
}
// 每层ul最后一个li横线带弧度
ul > li:last-child::before {
  height: 10px;
  border-top: none;
  border-bottom: 2px solid #eb3b5a;
  top: 3px;
  border-bottom-left-radius: 5px;
  border-left: 2px solid #eb3b5a;
}
</style>
