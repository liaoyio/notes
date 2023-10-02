<!--

@author: pan
@createDate: 2022-11-30 23:16
-->
<script setup lang="ts">
import { ref } from 'vue'
const enterActiveClass = ref('')
const leaveActiveClass = ref('')
const show = ref<boolean>(true)
/**
 * @param _enterActiveClass 元素进入过渡动画class
 * @param _leaveActiveClass 元素离开过渡动画class
 *
 */
function onUpdateActiveClass(
  _enterActiveClass: string,
  _leaveActiveClass: string
) {
  enterActiveClass.value = _enterActiveClass
  leaveActiveClass.value = _leaveActiveClass
  // 将元素设置为不可见
  show.value = false
}
/**
 * 元素离开动画执行完毕之后，执行的回调函数
 *
 */
function onAfterLeave() {
  // 将元素设置为可见
  show.value = true
}
</script>

<template>
  <div class="container">
    <div class="left">
      <Transition
        :enter-active-class="enterActiveClass"
        :leave-active-class="leaveActiveClass"
        @after-leave="onAfterLeave"
      >
        <p v-show="show">Animate.css</p>
      </Transition>
    </div>
    <div class="right">
      <dl>
        <dt>进入效果</dt>
        <dd
          @click="onUpdateActiveClass('animate__animated animate__fadeIn', '')"
        >
          普通淡入
        </dd>
        <dd
          @click="
            onUpdateActiveClass('animate__animated animate__fadeInDown', '')
          "
        >
          从上方淡入
        </dd>
        <dd
          @click="onUpdateActiveClass('animate__animated animate__zoomIn', '')"
        >
          放大进入
        </dd>
        <dd
          @click="
            onUpdateActiveClass('animate__animated animate__slideInLeft', '')
          "
        >
          幻灯片从左边进入
        </dd>
        <dd
          @click="
            onUpdateActiveClass('animate__animated animate__slideInRight', '')
          "
        >
          幻灯片从右边进入
        </dd>
      </dl>
      <dl>
        <dt>离开效果</dt>
        <dd
          @click="onUpdateActiveClass('', 'animate__animated animate__fadeOut')"
        >
          普通淡出
        </dd>
        <dd
          @click="
            onUpdateActiveClass('', 'animate__animated animate__fadeOutDown')
          "
        >
          往下方淡出
        </dd>
        <dd
          @click="onUpdateActiveClass('', 'animate__animated animate__zoomOut')"
        >
          缩小离开
        </dd>
        <dd
          @click="
            onUpdateActiveClass('', 'animate__animated animate__slideOutLeft')
          "
        >
          幻灯片从左边离开
        </dd>
        <dd
          @click="
            onUpdateActiveClass('', 'animate__animated animate__slideOutRight')
          "
        >
          幻灯片从右边离开
        </dd>
      </dl>
      <dl>
        <dt>进入和离开效果</dt>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__fadeIn',
              'animate__animated animate__fadeOut'
            )
          "
        >
          先淡出再淡入
        </dd>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__fadeInUp',
              'animate__animated animate__fadeOutDown'
            )
          "
        >
          先从下方淡出，再从下方淡入
        </dd>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__fadeInDown',
              'animate__animated animate__fadeOutDown'
            )
          "
        >
          先从下方淡出，再从上方淡入
        </dd>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__zoomIn',
              'animate__animated animate__zoomOut'
            )
          "
        >
          先缩小离开，再放大进入
        </dd>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__slideInLeft',
              'animate__animated animate__slideOutLeft'
            )
          "
        >
          幻灯片:先从左边离开，再从左边进入
        </dd>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__slideInRight',
              'animate__animated animate__slideOutLeft'
            )
          "
        >
          幻灯片:先从左边离开，再从右边进入
        </dd>
      </dl>
      <dl>
        <dt>调整速度</dt>
        <dd
          @click="
            onUpdateActiveClass(
              'animate__animated animate__slideInRight animate__slow',
              'animate__animated animate__slideOutLeft animate__fast'
            )
          "
        >
          幻灯片:先从左边离开（快速），再从右边进入（慢速）
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-left: 20%;
  }
}
.right {
  flex: 1;
  overflow: auto;
}
dd {
  cursor: pointer;
}
</style>
