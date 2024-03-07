import { useAsyncData } from '#imports'
import consola from 'consola'
import type { Page } from '../types'

const useWpPage = async (slug?: string): Promise<Page> => {
  const route = useRoute()
  const query = slug || route.path.substring(1)

  const { data, error } = await useAsyncData<Array<Page>>('page', async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    return $fetch(`${apiEndpoint}/pages?slug=${query}${additonnalQueryParams}`)
  })

  if(error.value) {
    consola.error(error)
  }

  if(!data.value || data.value.length === 0) {
    consola.error(`No page with slug "${query}" found`)
    return {} as Page
  }

  // @ts-ignore
  return data.value[0] as Page
}

export default useWpPage
