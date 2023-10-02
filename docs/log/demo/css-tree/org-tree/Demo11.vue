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
.tree {
  overflow: auto;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul {
    // 基于flex实现树的层级结构
    display: flex;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      border-top: 3px solid #a55eea;
      width: 15px;
      top: 50%;
      left: -30px;
    }
    li {
      align-items: center;
      display: flex;
      flex-shrink: 0;
      box-sizing: border-box;
      padding: 5px 10px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        height: 50%;
        top: 0;
        left: -15px;
        border-left: 3px solid #a55eea;
        border-bottom: 3px solid #a55eea;
        width: 23px;
      }
      &::after {
        content: '';
        position: absolute;
        height: 50%;
        bottom: 0;
        left: -15px;
        border-left: 3px solid #a55eea;
      }
      a {
        color: #111;
        opacity: 0.7;
        border: 1px solid #111;
        border-radius: 3px;
        padding: 5px 10px;
      }
      ul {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
      }
    }
    > li:first-child {
      &::before {
        display: none;
      }
      &::after {
        border-top: 3px solid #a55eea;
        width: 23px;
        border-top-left-radius: 5px;
      }
    }
    > li:last-child {
      &::after {
        display: none;
      }
      &::before {
        border-bottom: 3px solid #a55eea;
        width: 23px;
        border-bottom-left-radius: 5px;
      }
    }
    > li:first-child:last-child {
      &::after {
        display: block;
        position: absolute;
        top: 50%;
        left: -30px;
        width: 38px;
        height: 0;
        border-top-left-radius: 0;
        border-top: 3px solid #a55eea;
        border-left: 0;
      }
    }
  }
}
</style>
