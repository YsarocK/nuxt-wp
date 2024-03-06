interface Page {
  id: number,
  acf: any,
}


const useFetchPage = async (): Promise<Page> => {
  const { data, error } = await useAsyncData<Array<Object>>('page', async () => {
    const route = useRoute()
    const { API_URL } = useRuntimeConfig().public
    return $fetch(`${API_URL}/pages?slug=${route.path.substring(1)}&acf`)
  })

  // @ts-ignore
  return data.value[0] as Page
}

export default useFetchPage
