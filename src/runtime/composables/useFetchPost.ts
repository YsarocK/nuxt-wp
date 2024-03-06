interface Post {
  id: number,
  title: {
    rendered: string
  },
  acf: any,
}

const useFetchPost = async () => {
  const { data, error } = await useAsyncData<Array<Post>>('post', async () => {
    const route = useRoute()
    const { API_URL } = useRuntimeConfig().public
    return $fetch(`${API_URL}/post?slug=${route.path.substring(1)}&acf`)
  })

  if(error.value || !data.value) {
    await navigateTo('/404')
  }

  // @ts-ignore
  return data.value[0] as Page
}

export default useFetchPost
