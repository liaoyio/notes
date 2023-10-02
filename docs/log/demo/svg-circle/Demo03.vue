<template>
  <div class="linear-gradient-pink w-full h-60 rounded-lg flex_ccc">
    <div class="w-200px h-200px mx-auto">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- stroke-dasharray: 只有一个参数时
         表示先绘制30单位的非空白边框，再绘制一个30单位的空白边框，
         然后一直这样循环往复，直至绘制完整个圆的边框
      -->
        <circle cx="50" cy="50" r="48" stroke-dasharray="30" stroke="white" stroke-width="2" fill="none" />
      </svg>
    </div>
  </div>
</template>
