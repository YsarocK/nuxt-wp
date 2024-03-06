import type { Page } from '../types'


const useWpPage = async (slug?: string): Promise<Page> => {
  const { data } = await useAsyncData<Array<Object>>('page', async () => {
    const route = useRoute()
    const query = slug || route.path.substring(1)
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    return $fetch(`${apiEndpoint}/pages?slug=${query}${additonnalQueryParams}`)
  })

  // @ts-ignore
  return data.value[0] as Page
}

export default useWpPage
