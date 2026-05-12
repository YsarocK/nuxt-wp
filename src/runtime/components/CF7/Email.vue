<template>
  <label v-if="field.labels[0]" :for="field.name">{{ field.labels[0] }}</label>
  <input type="email" :id="field.name" :name="field.name" v-model="model" :placeholder="placeholder" />
</template>

<script setup lang="ts">
const model = defineModel({ default: '' })

const { field } = defineProps<{
  field: any
}>()

const placeholder = field.options?.includes('placeholder') ? field.values?.[0] || '' : ''
</script>