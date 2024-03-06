interface Post {
  id: number,
  title: {
    rendered: string
  },
  featured_media?: number,
  acf: any,
}


const useFetchAllPosts = async (type: string = 'posts', maxItems: number = 6) => {
  const { data } = await useAsyncData<Array<Post>>('all_posts', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    return $fetch(`${apiEndpoint}/${type}?per_page=${maxItems}&acf?_embed`)
  })

  // @ts-ignore
  return data.value as Array<Post>
}

export default useFetchAllPosts
