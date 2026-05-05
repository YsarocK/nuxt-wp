import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { menuId } = getQuery(event)

  if (!menuId) {
    return new Response('Missing menuId query parameter', { status: 400 })
  }

  const { apiEndpoint } = useRuntimeConfig().public.wordpress
  const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

  if (!applicationUser || !applicationPassword) {
    return new Response('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined', { status: 500 })
  }

  return $fetch(`${apiEndpoint}/menu-items?menus=${menuId}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${applicationUser}:${applicationPassword}`).toString('base64')}`
    }
  })
})
