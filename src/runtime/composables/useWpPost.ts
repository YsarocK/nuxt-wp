import { useAsyncData, useRuntimeConfig, useRoute } from '#imports'
import consola from 'consola'
import type { Post } from '../types'

interface Options {
  type?: string,
  slug?: string
}

const useWpPost = async ({ type, slug }: Options = { type: 'posts' }) => {
  const route = useRoute()
  const query = slug || route.path.substring(1)

  const { data, error } = await useAsyncData<Array<Post>>('post', async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public
    return $fetch(`${apiEndpoint}/${type}?slug=${query})}${additonnalQueryParams}`)
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
