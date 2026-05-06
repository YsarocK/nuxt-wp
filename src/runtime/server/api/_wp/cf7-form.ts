import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  if (!id) {
    return new Response('Missing id query parameter', { status: 400 })
  }

  const config = useRuntimeConfig(event)
  const { apiEndpointShort } = config.public.wordpress
  const { applicationUser, applicationPassword } = config.wordpress

  if (!applicationUser || !applicationPassword) {
    return new Response('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined', { status: 500 })
  }

  return $fetch(`${apiEndpointShort}/contact-form-7/v1/contact-forms/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${applicationUser}:${applicationPassword}`).toString('base64')}`
    }
  })
})
