<template>
  <textarea :name="field.name" v-model="model" ></textarea>
</template>

<script setup>
const model = defineModel({ default: 1 });
const { field } = defineProps({
  field: { type: null, required: true }
});
</script>
