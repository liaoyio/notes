<template>
  <div class="scrollbar flex gap-4 w-full h-full text-white rounded-lg p-4 bg-gradient-to-r from-purple-500 to-pink-500">
    <div class="w-60 flex-shrink-0">
      <div class="w-full h-full overflow-auto ">
        <ul class="felx flex-col">
          <li>这是很长很长很长很长很长很长很长很长的内容</li>
          <li>下面这根线把滚动条撑出来了</li>
          <li>但没有撑开li或者说ul本身的宽度</li>
          <li>导致线在撑开部分就没有</li>
          <li>实际原因是ul的宽度没被撑开</li>
          <li>这是内容</li>
          <li>这是内容</li>
          <li>这是内容</li>
          <li>这是内容</li>
          <li>这是内容</li>
          <li>这是内容</li>
          <li>这是内容</li>
        </ul>
      </div>
    </div>
    <div class="flex-1 rounded-lg bg-white opacity-25" />
  </div>
</template>

<style lang="scss" scoped>
ul > li {
  min-height: 36px;
  white-space: nowrap;
  border-bottom: 1px solid #ffffff51
}
</style>
