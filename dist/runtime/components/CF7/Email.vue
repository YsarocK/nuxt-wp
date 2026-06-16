<template>
  <input type="email" :name="field.name" v-model="model"  />
</template>

<script setup>
const model = defineModel({ default: 1 });
const { field } = defineProps({
  field: { type: null, required: true }
});
</script>
