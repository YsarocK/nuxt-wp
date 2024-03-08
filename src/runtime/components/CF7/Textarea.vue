<template>
  <textarea :name="field.name" v-model="model" ></textarea>
</template>

<script setup lang="ts">
const model = defineModel({ default: 1 })

const { field } = defineProps<{
  field : any
}>()
</script>