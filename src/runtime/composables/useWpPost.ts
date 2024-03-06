import type { Post } from '../types'

const useWpPost = async (type: string = 'posts',) => {
  const { data, error } = await useAsyncData<Array<Post>>('post', async () => {
    const route = useRoute()
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public
    return $fetch(`${apiEndpoint}/${type}?slug=${route.path.substring(1)}${additonnalQueryParams}`)
  })

  if(error.value || !data.value) {
    await navigateTo('/404')
  }

  // @ts-ignore
  return data.value[0] as Post
}

export default useWpPost
