import { useAsyncData } from '#imports'
import consola from 'consola'
import type { Settings } from '../types'

const useWpSettings = async () => {
  const { data, error } = await useAsyncData<Settings>('wp-settings', async () => {
    return $fetch('/api/_wp/settings')
  })

  if(error.value) {
    consola.error(error)
  }

  // @ts-ignore
  return data.value
}

export default useWpSettings
