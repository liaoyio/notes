<template>
  <div class="w-full h-72 rounded-lg flex_ccc ">
    <div
      class="
        relative w-35 h-35 border-2
        border-dashed border-orange-500 rounded-lg"
    >
      <div
        class="
          w-32 h-32 linear-gradient-blue cursor-pointer rounded-lg
          absolute left-50% top-50% -mt-16 -ml-16
          after:content-[''] after:w-5 after:h-5 after:rounded-50%
          after:absolute  after:-top-2 after:-left-2
          after:bg-purple
          hover:rotate-45"
        style="transition: transform 0.5s;transform-origin: left top;"
      />
    </div>
  </div>
</template>
