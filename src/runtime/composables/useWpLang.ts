import { useRuntimeConfig, useRoute } from '#imports'

const useWpLang = (): string | undefined => {
  const config = useRuntimeConfig().public.wordpress
  if (!config.polylang?.enabled) return undefined

  const route = useRoute()
  const path = route.path.substring(1)
  const firstSegment = path.split('/')[0]
  const languages = config.polylang.languages || []

  if (languages.includes(firstSegment)) {
    return firstSegment
  }

  return config.polylang.defaultLanguage
}

export default useWpLang
