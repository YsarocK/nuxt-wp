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

  const { data, error } = await useAsyncData<Array<Post>>('post', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
  
    return $fetch(`${apiEndpoint}/${type}/${query}`)
  })

  if(error.value) {
    consola.error(error)
  }

  if(!data.value || data.value.length === 0) {
    consola.error(`No post with slug or ID "${query}" found`)
    return {} as Post
  }

  // @ts-ignore
  return data.value[0] as Post
}

export default useWpPost
