<script setup lang="ts">
const handleChange = (event: Event) =>  {
  console.log((event.target as HTMLInputElement).value)
}
</script>

<template>
  <input type="text" @change="handleChange">
</template>


