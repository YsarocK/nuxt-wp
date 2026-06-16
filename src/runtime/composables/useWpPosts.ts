import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Post } from '../types'
import useWpLang from './useWpLang'

interface Options {
  type?: string
  maxItems?: number,
  categories?: Array<number>,
  lang?: string,
}

const useWpPosts = async ({ type = 'posts', maxItems = 6, categories = [], lang }: Options = {}) => {
  const resolvedLang = lang ?? useWpLang()
  const langKey = resolvedLang ? `-${resolvedLang}` : ''

  const { data, error } = await useAsyncData<Array<Post>>(`all_posts_${type}${langKey}`, async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress

    const params = new URLSearchParams({
      per_page: String(maxItems),
      categories: categories.join(',')
    })
    if (resolvedLang) params.set('lang', resolvedLang)

    return $fetch(`${apiEndpoint}/${type}?${params.toString()}${additonnalQueryParams}`)
  })

  if (error.value) {
    consola.error(error)
  }

  if (!data.value || data.value.length === 0) {
    consola.error(`No ${type} found`)
    return {} as Post
  }

  // @ts-ignore
  return data.value as Array<Post>
}

export default useWpPosts
