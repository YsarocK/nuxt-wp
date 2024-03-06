import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  apiEndpoint: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-wp',
    configKey: 'wordpress'
  },
  defaults: {
    apiEndpoint: undefined
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addImportsDir(resolver.resolve('./runtime', "composables"));
  }
})
