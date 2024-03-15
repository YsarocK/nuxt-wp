import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Settings } from '../types'

const useWpSettings = async () => {
  const { data, error } = await useAsyncData<Settings>('wp-settings', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

    if(!applicationUser || !applicationPassword) {
      consola.error(new Error('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined'))
    }

    return $fetch(`${apiEndpoint}/settings`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
      }
    })
  })

  if(error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return data.value
}

export default useWpSettings
