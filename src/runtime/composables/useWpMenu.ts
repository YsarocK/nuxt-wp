import type { Menu } from '../types'
 
const useWpMenu = async (menu: number): Promise<Menu> => {
  const { data, error } = await useAsyncData<Array<Object>>(`menu-${menu}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress

    if(!applicationUser || !applicationPassword) {
      consola.error(new Error('WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined'))
    }

    return $fetch(`${apiEndpoint}/menu-items?menus=${menu}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(applicationUser + ":" + applicationPassword).toString('base64')}`
      }
    })
  })

  // @ts-ignore
  return data.value as Array<Menu>
}

export default useWpMenu
