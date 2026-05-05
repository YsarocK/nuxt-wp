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

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useAsyncData } from '#imports';
import consola from 'consola';
import { WpCF7Acceptance, WpCF7Checkbox, WpCF7Email, WpCF7Select, WpCF7Submit, WpCF7Text, WpCF7Textarea } from '#components';

const getFieldComponent = (type: string) => {
  switch (type) {
    case 'acceptance':
      return WpCF7Acceptance
    case 'checkbox':
      return WpCF7Checkbox
    case 'email':
      return WpCF7Email
    case 'select':
      return WpCF7Select
    case 'submit':
      return WpCF7Submit
    case 'text':
      return WpCF7Text
    case 'textarea':
      return WpCF7Textarea
    default:
      return WpCF7Text
  }
}

const { id, wpcf7_unit_tag } = defineProps<{
  id: string | number,
  wpcf7_unit_tag: string,
}>()

const { data: form, error } = await useAsyncData<any>(`form-${id}`, async () => {
  return $fetch('/api/_wp/cf7-form', { query: { id } })
})

if (error.value) {
  consola.error(error.value)
}

const fields = ref(form.value.properties.form.fields.map((field: any) => ({
  ...field,
  type: field.type.replace('*', ''),
  required: field.type.includes('*')
})))

const formDataModel = () => {
  const data: Record<string, string> = {}
  fields.value.forEach((field: any) => {
    if(field.name === '') return
    data[field.name] = ''
  })
  data._wpcf7_unit_tag = wpcf7_unit_tag
  return data
}

const formData = reactive(formDataModel())

const formResponse = reactive({
  status: null,
  message: null,
  invalidFields: null
})

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const res: any = await $fetch(`/api/submit-form`, {
    method: 'POST',
    body: {
      id,
      formData
    }
  })

  formResponse.status = res.status
  formResponse.message = res.message

  if (res.invalid_fields) {
    fields.value.forEach((field: any) => {
      field.error = null
    })

    res.invalid_fields.forEach((error: any) => {
      const field = fields.value.find((field: any) => field.name === error.field)
      console.log(field)
      if (field) {
        field.error = error.message
      }
    })
  }
}
</script>