import { useAsyncData, useRuntimeConfig } from '#imports'
import consola from 'consola'
import type { Taxonomy } from '../types'
import useWpLang from './useWpLang'

interface Options {
  taxonomy?: string,
  slug?: string,
  lang?: string,
}

const useWpTaxonomy = async ({ taxonomy, lang }: Options = {}) => {
  const resolvedLang = lang ?? useWpLang()
  const langKey = resolvedLang ? `-${resolvedLang}` : ''

  const { data, error } = await useAsyncData<Taxonomy>(`taxonomy-${taxonomy}${langKey}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress
    const langParam = resolvedLang ? `?lang=${resolvedLang}` : ''

    const taxonomyData = await $fetch(`${apiEndpoint}/taxonomies/${taxonomy}`)
    const terms = await $fetch(`${apiEndpoint}/${taxonomy}${langParam}`)

    return {
      ...taxonomyData as Taxonomy,
      terms,
    } as Taxonomy
  })

  if (error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return data.value
}

export default useWpTaxonomy
