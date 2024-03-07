<template>
  <div>
    <h3>{{ form.title }}</h3>
    <form>
      <div v-for="field in fields">
        <input :type="field.type.substring(-1)" :name="field.name" >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import consola from 'consola';

const { id } = defineProps<{
  id: string
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
</script>