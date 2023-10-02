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
li {
  margin: 0 !important;
  padding: 0 !important;

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
  margin: 3px !important;
  // 让内容将li撑开
  flex-shrink: 0;
  // 以下css实现li下的子元素水平居中的效果
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tree li a {
  color: #111;
  opacity: 0.7;
  border: 1px solid #eb3b5a;
  padding: 5px 10px;
  border-radius: 5px;
}

// 每个层级之间设置一点间隔
.tree li ul {
  margin-top: 30px !important;
}
</style>
