<template>
  <div>
    <h3>{{ form.title }}</h3>
    <form @submit="(e) => handleSubmit(e)" class="wpcf">
      <div v-for="field in fields" :key="field.name" :class="`wpcf-field wpcf-field--${field.type}`">
        <component :is="getFieldComponent(field.type)" :field="field" v-model="formData[field.name]" />
        <p class="wpcf-field-error" v-if="field.error">{{ field.error }}</p>
      </div>
      <p v-if="formResponse.message">{{ formResponse.message }}</p>
    </form>
  </div>
</template>

<script setup>
import consola from "consola";
import { WpCF7Email, WpCF7Submit, WpCF7Text, WpCF7Textarea } from "#components";
const getFieldComponent = (type) => {
  switch (type) {
    case "email":
      return WpCF7Email;
    case "submit":
      return WpCF7Submit;
    case "text":
      return WpCF7Text;
    case "textarea":
      return WpCF7Textarea;
    default:
      return WpCF7Text;
  }
};
const { id, wpcf7_unit_tag } = defineProps({
  id: { type: [String, Number], required: true },
  wpcf7_unit_tag: { type: String, required: true }
});
const { data: form, error } = await useAsyncData(`form-${id}`, async () => {
  return $fetch("/api/_wp/cf7-form", { query: { id } });
});
if (error.value) {
  consola.error(error.value);
}
const fields = ref(form.value.properties.form.fields.map((field) => ({
  ...field,
  type: field.type.replace("*", ""),
  required: field.type.includes("*")
})));
const formDataModel = () => {
  const data = {};
  fields.value.forEach((field) => {
    if (field.name === "") return;
    data[field.name] = "";
  });
  data._wpcf7_unit_tag = wpcf7_unit_tag;
  return data;
};
const formData = reactive(formDataModel());
const formResponse = reactive({
  status: null,
  message: null,
  invalidFields: null
});
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await $fetch(`/api/submit-form`, {
    method: "POST",
    body: {
      id,
      formData
    }
  });
  formResponse.status = res.status;
  formResponse.message = res.message;
  if (res.invalid_fields) {
    fields.value.forEach((field) => {
      field.error = null;
    });
    res.invalid_fields.forEach((error2) => {
      const field = fields.value.find((field2) => field2.name === error2.field);
      console.log(field);
      if (field) {
        field.error = error2.message;
      }
    });
  }
};
</script>
