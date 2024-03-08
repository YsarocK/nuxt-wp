<template>
  <input type="submit" :name="field.labels[0]" :value="field.labels[0]"/>
</template>

<script setup lang="ts">
const { field } = defineProps<{
  field : any
}>()
</script>