import { useAsyncData, useRuntimeConfig, useRoute } from '#imports'
import consola from 'consola'
import type { Taxonomy } from '../types'

interface Options {
  taxonomy?: string,
  slug?: string,
}

const useWpTaxonomy = async ({ taxonomy }: Options = {}) => {
  const query = taxonomy

  const { data, error } = await useAsyncData<Taxonomy>('post', async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress

    const taxonomy = await $fetch(`${apiEndpoint}/taxonomies/${query}`)
    const terms = await $fetch(`${apiEndpoint}/${query}`)
  
    return {
      ...taxonomy as Taxonomy,
      terms,
    } as Taxonomy
  })

  if(error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return data.value
}

export default useWpTaxonomy
