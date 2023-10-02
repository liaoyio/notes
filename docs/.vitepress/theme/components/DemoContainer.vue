<script setup lang="ts">
import { computed, onErrorCaptured, ref } from 'vue'

const props = defineProps<{ pkg: string; path: string }>()

const demoPath = computed(() => (props.pkg && props.path) ? `/${props.pkg}/${props.path}` : '')
const error = ref<Error | null>(null)

// @ts-expect-error
onErrorCaptured(err => error.value = err)

const GITHUB_BLOB_URL = ''
const URL = `${GITHUB_BLOB_URL}${demoPath.value}`
</script>

<template>
  <div :key="demoPath" class="demo wide">
    <p v-if="demoPath" class="demo-source-link">
      <a v-if="GITHUB_BLOB_URL" :href="URL" target="_blank">source</a>
    </p>
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
