<template>
  <label v-if="field.labels[0]" :for="field.name">{{ field.labels[0] }}</label>
  <input type="text" :name="field.name" v-model="model" />
</template>

<script setup>
const model = defineModel({ default: 1 });
const { field } = defineProps({
  field: { type: null, required: true }
});
</script>
