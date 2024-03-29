import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Post } from '../types'

interface Options {
  type?: string
  maxItems?: number,
  categories?: Array<number>
}

const useWpPosts = async ({ type = 'posts', maxItems = 6, categories = [] }: Options = {}) => {
  const { data, error } = await useAsyncData<Array<Post>>(`all_posts_${type}`, async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    
    const params = new URLSearchParams({
      per_page: String(maxItems),
      categories: categories.join(',')
    });
  
    return $fetch(`${apiEndpoint}/${type}?${params.toString()}${additonnalQueryParams}`)
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
