import { useAsyncData } from '#imports'
import consola from 'consola'
import type { Menu } from '../types'

interface Options {
  menuId: number
}

const useWpMenu = async ({ menuId }: Options): Promise<Menu> => {
  const { data, error } = await useAsyncData<Array<Menu>>(`menu-${menuId}`, async () => {
    return $fetch('/api/_wp/menu', { query: { menuId } })
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
