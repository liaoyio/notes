<script setup>
const list = {
  title: 'Paren',
  children:[
    {
      title: 'Child 1',
      children: [
        {
          title: 'Grandchild 1',
        },
      ],
    },
    {
      title: 'Child 2',
      children: [
        {
          title: 'Grandchild 1',
        },
        {
          title: 'Grandchild 2',
          children: [
            {
              title: 'Grand Grand Child 1',
            },
            {
              title: 'Grand Grand Child 2',
            },
            {
              title: 'Grand Grand Child 3',
            },
          ],
        },
        {
          title: 'Grandchild 3',
        },
      ],
    },
  ],
}
</script>


<template>
  <div class="tree">
    <ul>
      <li>
        <a class="succeed">
          {{ list.title }}
        </a>
        <ul>
          <li v-for="(child, key1) in list.children" :key="key1">
            <a class="succeed">
              {{ child.title }}
            </a>
            <ul v-if="child.children?.length">
              <li v-for="(grand, key2) in child.children" :key="key2">
                <a href="#">{{ grand.title }}</a>
                <ul v-if="grand.children?.length">
                  <li v-for="(great, key3) in grand.children" :key="key3">
                    <a href="#">{{ great.title }}</a>
                  </li>
                </ul>
              </li>
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
  /* 让内容将li撑开 */
  flex-shrink: 0;
 /* li下的子元素水平居中效果 */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* 左上横线连线 */
  &::before {
    position: absolute;
    content: '';
    border-bottom: 2px solid #a55eea;
    width: 50%;
    left: 0;
    height: 1px;
    top: -15px;
  }

  /* 右上横线连线 */
  &::after {
    position: absolute;
    content: '';
    border-bottom: 2px solid #a55eea;
    /*  width 和 right 解决连线之间的缝隙 */
    width: 60%;
    right: -10%;
    height: 1px;
    top: -15px;
  }
}

/* ul下第一个直属li无需左上连线 */
.tree ul>li:first-child {
  &::before {
    display: none;
  }
}

/* ul下最后一个直属li无需右上连线 */
.tree ul>li:last-child {
  &::after {
    display: none;
  }
}

.tree li a {
  position: relative;
  background: #6b41e6;
  color: #fff;
  padding: 0.5rem 2rem;
  font-weight: 500;
  border-radius: 8px;
  transition:  background-color 0.3s;
  &:hover {
    background: #7b5cf1;
  }
  &::after {
    position: absolute;
    content: '';

    display: block;
    width: 2px;
    height: 15px;
    /* lv2 竖线 */
    border-left: 2px solid #a55eea;
    top: -15px;
    left: 50%;
  }
}

/* 通过 ul 的before 解决当只有一个子节点时，竖向连接线长度不足问题 */
.tree ul {
  position: relative;
  &:first-child::before {
    display: none !important;
  }
  &:first-child > li:first-child > a::after {
    display: none;
  }
  &::before {
    content: '';
    position: absolute;
    height: 18px;
    width: 2px;
    /* lv1 */
    border-left: 2px solid #a55eea;
    left: 50%;
    top: -30px;
  }
}

/*  每个层级之间设置一点间隔 */
.tree li ul {
  margin-top: 30px !important;
}
</style>
