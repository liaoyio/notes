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
ul.domtree,
ul.domtree ul {
  margin: 0;
  padding: 0 0 0 2em;
}

ul.domtree li {
  list-style: none;
  position: relative;
  margin-top: 0 !important;
}

ul.domtree > li:first-child:before {
  border-style: none none solid none;
}

ul.domtree li:before {
  position: absolute;
  content: '';
  top: -0.01em;
  left: -0.7em;
  width: 0.5em;
  height: 0.615em;
  border-style: none none solid solid;
  border-width: 0.05em;
  border-color: #aaa;
}

ul.domtree li:not(:last-child):after {
  position: absolute;
  content: '';
  top: 0.7em;
  left: -0.7em;
  bottom: 0;
  border-style: none none none solid;
  border-width: 0.05em;
  border-color: #aaa;
}
</style>
