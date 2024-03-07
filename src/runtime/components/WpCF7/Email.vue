<template>
  <input type="email" :name="name" />
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>