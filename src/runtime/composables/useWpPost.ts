import type { Post } from '../types'

const useWpPost = async () => {
  const { data, error } = await useAsyncData<Array<Post>>('post', async () => {
    const route = useRoute()
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public
    return $fetch(`${apiEndpoint}/post?slug=${route.path.substring(1)}${additonnalQueryParams}`)
  })

  if(error.value || !data.value) {
    await navigateTo('/404')
  }

  // @ts-ignore
  return data.value[0] as Page
}

export default useWpPost
