import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { menuId, lang } = getQuery(event)

  if (!menuId) {
    return new Response('Missing menuId query parameter', { status: 400 })
  }

  const config = useRuntimeConfig(event)
  const { apiEndpoint } = config.public.wordpress
  const { applicationUser, applicationPassword } = config.wordpress

  if (!applicationUser || !applicationPassword) {
    return new Response('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined', { status: 500 })
  }

  const langParam = lang ? `&lang=${lang}` : ''
  return $fetch(`${apiEndpoint}/menu-items?menus=${menuId}${langParam}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${applicationUser}:${applicationPassword}`).toString('base64')}`
    }
  })
})
