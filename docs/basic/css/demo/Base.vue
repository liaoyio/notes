<template>
  <div class="rounded-xl pb-10 bg-slate-50 bg-grid-slate-100">
    <div class="grid grid-cols-1 md:grid-cols-3 text-slate-500 font-medium">
      <div class="flex flex-col items-center gap-y-1">
        <p class="  text-center ">
          transform-origin: center;
        </p>
        <div class="relative">
          <div class="absolute inset-0 ">
            <img
              class="w-24 h-24 object-cover rounded-lg opacity-25"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
          </div>
          <div class="relative z-10 origin-center rotate-45 ring-1 ring-inset ring-black/10 rounded-lg ">
            <img
              class="w-24 h-24 object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
            <!-- <div class="absolute inset-0  " /> -->
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-y-1">
        <p class="text-center">
          transform-origin: left;
        </p>
        <div class="relative">
          <div class="absolute inset-0">
            <img
              class="w-24 h-24 object-cover rounded-lg opacity-25"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
          </div>
          <div class="relative z-10 origin-top-left rotate-12 ring-1 ring-inset ring-black/10 rounded-lg">
            <img
              class="w-24 h-24 object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-y-1">
        <p class="  text-center ">
          transform-origin: bottom;
        </p>
        <div class="relative">
          <div class="absolute inset-0">
            <img
              class="w-24 h-24 object-cover rounded-lg opacity-25"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
          </div>
          <div class="relative z-10 origin-bottom -rotate-12 ">
            <img
              class="w-24 h-24 object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

