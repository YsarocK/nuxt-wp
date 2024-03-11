import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Menu } from '../types'
 
interface Options {
  menuId: number
}

const useWpMenu = async ({ menuId }: Options): Promise<Menu> => {
  const { data, error } = await useAsyncData<Array<Menu>>(`menu-${menuId}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

    if(!applicationUser || !applicationPassword) {
      consola.error(new Error('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined'))
    }

    return $fetch(`${apiEndpoint}/menu-items?menus=${menuId}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
      }
    })
  })

  if(error.value) {
    consola.error(error)
  }

  if(!data.value || data.value.length === 0) {
    consola.error(`No menu with ID "${menuId}" found`)
    return {} as Menu
  }

  // @ts-ignore
  return data.value as Menu
}

export default useWpMenu
