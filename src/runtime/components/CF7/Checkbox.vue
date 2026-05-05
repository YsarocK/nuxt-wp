<template>
  <div v-for="(value, index) in field.values" :key="value" class="wpcf-checkbox-item">
    <input
      type="checkbox"
      :id="`${field.name}-${index}`"
      :name="field.name"
      :value="value"
      v-model="model"
    />
    <label :for="`${field.name}-${index}`">{{ field.labels[index] }}</label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string[]>({ default: () => [] })

const { field } = defineProps<{
  field: any
}>()
</script>
