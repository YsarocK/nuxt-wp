import { useAsyncData } from '#imports'
import consola from 'consola'
import type { Menu } from '../types'
import useWpLang from './useWpLang'

interface Options {
  menuId: number,
  lang?: string,
}

const useWpMenu = async ({ menuId, lang }: Options): Promise<Menu> => {
  const resolvedLang = lang ?? useWpLang()
  const langKey = resolvedLang ? `-${resolvedLang}` : ''

  const { data, error } = await useAsyncData<Array<Menu>>(`menu-${menuId}${langKey}`, async () => {
    return $fetch('/api/_wp/menu', { query: { menuId, lang: resolvedLang } })
  })

  if (error.value) {
    consola.error(error)
  }

  if (!data.value || data.value.length === 0) {
    consola.error(`No menu with ID "${menuId}" found`)
    return {} as Menu
  }

  // @ts-ignore
  return data.value as Menu
}

export default useWpMenu
