import { useAsyncData } from '#imports'
import consola from 'consola'
import type { Menu } from '../types'
 
const useWpMenu = async (menuId: number): Promise<Menu> => {
  const { data, error } = await useAsyncData<Array<Menu>>(`menu-${menuId}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

    if(!applicationUser || !applicationPassword) {
      consola.error(new Error('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined'))
    }

    return $fetch(`${apiEndpoint}/menu-items?menu=${menuId}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
      }
    })
  })

  // @ts-ignore
  return data.value[0] as Menu
}

export default useWpMenu
