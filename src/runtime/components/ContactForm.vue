<template>
  <div>
    <h3>{{ form.title }}</h3>
    <form @submit="(e) => handleSubmit(e)">
      <div v-for="field in fields">
        <WpCF7Textarea v-if="field.type.includes('textarea')" :field="field" v-model="formData[field.name]" />
        <WpCF7Text v-else-if="field.type.includes('text')" :field="field" v-model="formData[field.name]" />
        <WpCF7Email v-else-if="field.type.includes('email')" :field="field" v-model="formData[field.name]"  />
        <WpCF7Submit v-else-if="field.type.includes('submit')" :field="field" v-model="formData[field.name]" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import consola from 'consola';

const { id, wpcf7_unit_tag } = defineProps<{
  id: string | number,
  wpcf7_unit_tag: string,
}>()

const { data: form, error } = await useAsyncData<any>(`form-${id}`, async () => {
  const { apiEndpointShort } = useRuntimeConfig().public.wordpress
  const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

  return $fetch(`${apiEndpointShort}/contact-form-7/v1/contact-forms/${id}`, {
    headers: {
      'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
    }
  })
})

if (error.value) {
  consola.error(error.value)
}

const fields = form.value?.properties.form.fields

const formDataModel = () => {
  const data: Record<string, string> = {}
  fields.forEach((field: any) => {
    if(field.name === '') return
    data[field.name] = ''
  })
  data._wpcf7_unit_tag = wpcf7_unit_tag
  return data
}

const formData = reactive(formDataModel())

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const res = await $fetch(`/api/submit-form`, {
    method: 'POST',
    body: {
      id,
      formData
    }
  })

  consola.log(res)
}
</script>