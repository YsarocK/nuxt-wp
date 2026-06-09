import { useAsyncData, useRuntimeConfig, useRoute } from '#imports'
import consola from 'consola'
import type { Post } from '../types'
import useWpLang from './useWpLang'

interface Options {
  type?: string,
  id?: number | string,
  slug?: string,
  lang?: string,
}

const useWpPost = async ({ type = 'posts', id, slug, lang }: Options = {}) => {
  const route = useRoute()
  const resolvedLang = lang ?? useWpLang()
  const query = id ? id : slug || route.params.slug

  const langKey = resolvedLang ? `-${resolvedLang}` : ''
  const { data, error } = await useAsyncData<Post>(`post-${type}-${query}${langKey}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const langParam = resolvedLang ? `&lang=${resolvedLang}` : ''

    const url = id
      ? `${apiEndpoint}/${type}/${id}${resolvedLang ? `?lang=${resolvedLang}` : ''}`
      : `${apiEndpoint}/${type}?slug=${query}${langParam}`

    return $fetch(url)
  })

  if (error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return id ? data.value as Post : data.value[0] as Post
}

export default useWpPost
