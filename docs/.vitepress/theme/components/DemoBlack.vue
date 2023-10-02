<script setup lang="ts">
import {  onErrorCaptured, ref } from 'vue'

const props = defineProps<{ path: string }>()

const error = ref(null)

// @ts-expect-error
onErrorCaptured(err => error.value = err)
</script>

<template>
  <div :key="props.path" class="_black_demo bg-[#f9f9f9] divide-amber-100 px-[20px] py-8 md:p-8 rounded-lg">
    <ClientOnly>
      <Suspense>
        <slot />
        <template #fallback>
          Loading demo...
        </template>
      </Suspense>
    </ClientOnly>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<style scoped scss>
._black_demo{
  color: var(--vp-c-brand);
  font-size: 14px;
}
</style>
