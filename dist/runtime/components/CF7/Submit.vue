<template>
  <input type="submit" :name="field.labels[0]" :value="field.labels[0]"/>
</template>

<script setup>
const { field } = defineProps({
  field: { type: null, required: true }
});
</script>
