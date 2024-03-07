<template>
  <input type="submit" :name="name" :value="name"/>
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>