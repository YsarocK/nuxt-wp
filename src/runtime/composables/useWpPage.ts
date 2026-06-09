import { useAsyncData, useRoute, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Page } from '../types'
import useWpLang from './useWpLang'

interface Options {
  slug?: string
  slugs?: Record<string, string>
  lang?: string
}

const useWpPage = async ({ slug, slugs, lang }: Options = {}): Promise<Page> => {
  const route = useRoute()
  const config = useRuntimeConfig().public.wordpress
  const resolvedLang = lang ?? useWpLang()

  let query: string
  if (slugs && resolvedLang) {
    const defaultLang = config.polylang?.defaultLanguage ?? 'fr'
    query = slugs[resolvedLang] ?? slugs[defaultLang] ?? Object.values(slugs)[0]
  } else if (slug) {
    query = slug
  } else {
    let path = route.path.substring(1)
    if (resolvedLang && path.startsWith(`${resolvedLang}/`)) {
      path = path.substring(resolvedLang.length + 1)
    } else if (path === resolvedLang) {
      path = ''
    }
    query = path || config.homeSlug
  }

  const langKey = resolvedLang ? `-${resolvedLang}` : ''
  const { data, error } = await useAsyncData<Array<Page>>(`page-${query}${langKey}`, async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    const langParam = resolvedLang ? `&lang=${resolvedLang}` : ''
    return $fetch(`${apiEndpoint}/pages?slug=${query}${additonnalQueryParams}${langParam}`)
  })

  if (error.value) {
    consola.error(error)
  }

  if (!data.value || data.value.length === 0) {
    consola.error(`No page with slug "${query}" found`)
    return {} as Page
  }

  return data.value[0] as Page
}

export default useWpPage
