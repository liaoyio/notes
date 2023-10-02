<template>
  <div class="w-full h-72 rounded-lg flex_ccc ">
    <div
      class="
        relative w-35 h-35 border-2
        border-dashed border-orange-500 rounded-lg
        after:content-[''] after:w-5 after:h-5 after:rounded-50%
        after:absolute  after:top-0 after:left-0
         after:bg-purple
        "
    >
      <div
        class="
          w-32 h-32 linear-gradient-blue cursor-pointer rounded-lg
          absolute left-50% top-50% -mt-16 -ml-16
          hover:scale-150"
        style="transition: transform 0.5s;transform-origin: left top;"
      />
    </div>
  </div>
</template>
