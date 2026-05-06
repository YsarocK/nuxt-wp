<template>
  <label v-if="field.labels[0]" :for="field.name">{{ field.labels[0] }}</label>
  <select :name="field.name" :id="field.name" v-model="model">
    <option
      v-for="(value, index) in field.values"
      :key="value"
      :value="isFirstAsLabel && index === 0 ? '' : value"
      :disabled="isFirstAsLabel && index === 0"
    >
      {{ field.labels[index] }}
    </option>
  </select>
</template>

<script setup lang="ts">
const model = defineModel({ default: '' })

const { field } = defineProps<{
  field: any
}>()

const isFirstAsLabel = field.options?.includes('first_as_label')
</script>
