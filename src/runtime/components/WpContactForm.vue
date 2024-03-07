<template>
  <div>
    <h3>{{ form.title }}</h3>
    <form>
      <div v-for="field in fields">
        <WpCF7Textarea v-if="field.type === 'textarea'" :name="field.name" />
        <WpCF7Text v-else-if="field.type.includes('text')" :name="field.name" />
        <WpCF7Email v-else-if="field.type.includes('email')" :name="field.name" />
        <WpCF7Submit v-else-if="field.type === 'submit'" :name="field.name" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import consola from 'consola';
import WpCF7Text from './WpCF7/Text.vue'
import WpCF7Email from './WpCF7/Email.vue'
import WpCF7Textarea from './WpCF7/Textarea.vue'
import WpCF7Submit from './WpCF7/Submit.vue'

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