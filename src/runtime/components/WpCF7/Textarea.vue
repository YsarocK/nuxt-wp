<template>
  <textarea :name="name" ></textarea>
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>