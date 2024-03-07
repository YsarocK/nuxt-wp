<template>
  <input type="text" :name="name" />
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>