import { useAsyncData, useRuntimeConfig, useRoute } from '#imports'
import consola from 'consola'
import type { Post } from '../types'

interface Options {
  type?: string,
  id?: number | string,
  slug?: string
}

const useWpPost = async ({ type = 'posts', id, slug }: Options = {}) => {
  const route = useRoute()
  const query = id ? id : slug || route.params.slug

  const { data, error } = await useAsyncData<Post>('post', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress

    const url = id ? `${apiEndpoint}/${type}/${id}` : `${apiEndpoint}/${type}?slug=${query}`
  
    return $fetch(url)
  })

  if(error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return id ? data.value as Post : data.value[0] as Post
}

export default useWpPost
