<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
const res = await useWpPage()
console.log(res)
</script>