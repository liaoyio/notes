<template>
  <div class="tree">
    <ul>
      <li>
        <a href="#">Parent</a>
        <ul>
          <li>
            <a href="#">Child</a>
            <ul>
              <li>
                <a href="#">Grand Child</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Child</a>
            <ul>
              <li><a href="#">Grand Child</a></li>
              <li>
                <a href="#">Grand Child</a>
                <ul>
                  <li>
                    <a href="#">Great Grand Child</a>
                  </li>
                  <li>
                    <a href="#">Great Grand Child</a>
                  </li>
                  <li>
                    <a href="#">Great Grand Child</a>
                  </li>
                </ul>
              </li>
              <li><a href="#">Grand Child</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul,
li,
a {
  margin: 0 !important;
  padding: 0 !important;
  color: #111;
}

// 滚动条
.tree {
  overflow: auto;
}

// 去除li前面的点
.tree ul,
.tree li {
  list-style-type: none;
}

// 基于flex实现树的层级结构
.tree ul {
  display: flex;
}
.tree li {
  // li的边框和间隙只是让层级结构看的更清除
  border: 1px solid #eb3b5a;

  margin: 3px !important;
  // 让内容将li撑开
  flex-shrink: 0;
  // 以下css实现li下的子元素水平居中的效果
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
