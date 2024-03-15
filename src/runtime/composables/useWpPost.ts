import { useAsyncData, useRuntimeConfig, useRoute } from '#imports'
import consola from 'consola'
import type { Post } from '../types'

interface Options {
  type?: string,
  id?: number | string,
}

const useWpPost = async ({ type = 'posts', id }: Options = {}) => {
  const route = useRoute()
  const query = id || route.path.substring(1)

  const { data, error } = await useAsyncData<Post>('post', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
  
    return $fetch(`${apiEndpoint}/${type}/${query}`)
  })

  if(error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return data.value as Post
}

export default useWpPost
