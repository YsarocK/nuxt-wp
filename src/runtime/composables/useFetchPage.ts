interface Page {
  id: number,
  acf: any,
}

const useFetchPage = async (): Promise<Page> => {
  const { data } = await useAsyncData<Array<Object>>('page', async () => {
    const route = useRoute()
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress
    return $fetch(`${apiEndpoint}/pages?slug=${route.path.substring(1)}${additonnalQueryParams}`)
  })

  // @ts-ignore
  return data.value[0] as Page
}

export default useFetchPage
