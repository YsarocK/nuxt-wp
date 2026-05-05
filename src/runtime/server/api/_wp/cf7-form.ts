import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  if (!id) {
    return new Response('Missing id query parameter', { status: 400 })
  }

  const { apiEndpointShort } = useRuntimeConfig().public.wordpress
  const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

  if (!applicationUser || !applicationPassword) {
    return new Response('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined', { status: 500 })
  }

  return $fetch(`${apiEndpointShort}/contact-form-7/v1/contact-forms/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${applicationUser}:${applicationPassword}`).toString('base64')}`
    }
  })
})
