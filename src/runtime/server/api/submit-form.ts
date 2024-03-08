export default defineEventHandler(async (event) => {  
  if(event.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { apiEndpointShort } = useRuntimeConfig().public.wordpress
  const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

  const body: {
    id: string | number
    formData: Record<string, string>
  
  } = await readBody(event)

  const formDataPayload = new FormData()
  for (const key in body.formData) {
    formDataPayload.append(key, body.formData[key])
  }
  
  const res = await $fetch(`${apiEndpointShort}/contact-form-7/v1/contact-forms/${body.id}/feedback`, {
    method: 'POST',
    body: formDataPayload,
    headers: {
      'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
    }
  })

  return res
})