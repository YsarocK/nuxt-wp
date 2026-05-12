<template>
  <div class="wpcf-acceptance">
    <input
      type="checkbox"
      :id="field.name"
      :name="field.name"
      :value="field.name"
      v-model="model"
    />
    <label :for="field.name">{{ field.labels[0] }}</label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
const { field } = defineProps<{ field: any }>()
</script>
