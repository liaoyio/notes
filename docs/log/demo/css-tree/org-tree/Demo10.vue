<script setup lang="ts">
import { ref } from 'vue'

/**
 * 层级节点的间隔
 */
const levelNodeMargin = ref<number>(30)
const borderRadius = ref<string>('5px')
/**
 * 连线的粗细
 */
const lineSize = ref<string>('3px')
</script>

<template>
  <div class="tree">
    <ul>
      <li>
        <div>Parent</div>
        <ul>
          <li>
            <div>Child</div>
            <ul>
              <li>
                <div>Grand Child</div>
              </li>
            </ul>
          </li>
          <li>
            <div>Child</div>
            <ul>
              <li>
                <div>Grand Child</div>
                <ul>
                  <li>
                    <div>Grand Child the text is long</div>
                  </li>
                </ul>
              </li>
              <li>
                <div>Grand Child</div>
              </li>
              <li>
                <div>Grand Child</div>
                <ul>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                  <li>
                    <div>Great Grand Child</div>
                  </li>
                </ul>
              </li>
              <li>
                <div>Grand Child</div>
              </li>
            </ul>
          </li>
          <li>
            <div>Grand Child</div>
          </li>
          <li>
            <div>Grand Child</div>
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
    margin-top: calc(v-bind(levelNodeMargin) * 1px);

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: '';
      position: absolute;
      border-left: 2px solid pink;
      height: 18px;
      left: 50%;
      top: -30px;
    }
  }

  li {
    box-sizing: border-box;
    padding: 3px;
    // 让内容将li撑开
    flex-shrink: 0;
    // 以下css实现li下的子元素水平居中的效果
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    >div {
      color: #111;
      opacity: 0.7;
      border: 1px solid #111;
      padding: 10px 15px;
      border-radius: 3px;
      cursor: pointer;
    }

    // 左上连线
    &::before {
      content: '';
      position: absolute;
      width: calc(50% + 1px);
      left: 1px;
      top: -13px;
      height: 15px;
      opacity: 0.7;
      border-top: 2px solid #a55eea;
      border-right: 2px solid #a55eea;
      border-top-right-radius: 3px;
    }

    // 右上连线
    &::after {
      content: '';
      position: absolute;
      width: calc(50% + 1px);
      right: -1px;
      top: -13px;
      height: 15px;
      border-top: 2px solid #a55eea;
      border-left: 2px solid #a55eea;
    }
  }

  ul>li:first-child::before,
  ul>li:last-child::after {
    display: none;
  }

  ul>li:first-child {
    &::after {
      border-top-left-radius: v-bind(borderRadius);
      width: 55%;
      right: -5%;
    }
  }

  ul>li:last-child {
    &::before {
      border-top-right-radius: v-bind(borderRadius);
      width: 55%;
      left: -5%;
    }
  }

  ul>li:first-child:last-child {
    &::after {
      display: block;
      position: absolute;
      left: 50%;
      top: -30px;
      height: 32px;
      border-top-left-radius: 0;
      border-top: none;
    }
  }
}
</style>
