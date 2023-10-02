<template>
  <div class="h-300px overflow-auto">
    <div v-for="i in 10" :key="i" class="w-full relative">
      <h6 class="w-full bg-blue-500 px-2 py-2 rounded text-sm text-white" style="position: sticky;top: 0;">
        索引行 {{ i }}
      </h6>
      <span
        v-for="j in 15" :key="j"
        class="w-full flex flex-col text-base py-2 last:border-none border-b-2 border-b-red-400 border-b-dashed"
      >
        🎲 第{{ `${i}-${j}` }}项目
      </span>
    </div>
  </div>
</template>
