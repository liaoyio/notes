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
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% + 12px);
    border-left: 2px solid #eb3b5a;
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
  height: 100%;
  top: 13px;
}
</style>
