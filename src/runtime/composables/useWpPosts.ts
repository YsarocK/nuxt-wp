import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Post } from '../types'

interface Options {
  type?: string
  maxItems?: number
}

const useWpPosts = async ({ type, maxItems }: Options = { type: 'posts', maxItems: 6 }) => {
  const { data, error } = await useAsyncData<Array<Post>>('all_posts', async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    return $fetch(`${apiEndpoint}/${type}?per_page=${maxItems}${additonnalQueryParams}`)
  })

  if(error.value) {
    consola.error(error)
  }

  if(!data.value || data.value.length === 0) {
    consola.error(`No ${type} found`)
    return {} as Post
  }

  // @ts-ignore
  return data.value as Array<Post>
}

export default useWpPosts
