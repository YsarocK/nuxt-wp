import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'
import consola from 'consola'

export interface ModuleOptions {
  apiEndpoint?: string,
  applicationUser?: string,
  applicationPassword?: string,
  additonnalQueryParams?: string
}

export interface RuntimeConfig {
  public: {
    wordpress: {
      apiEndpoint: string,
      additonnalQueryParams: string | undefined
    }
  },
  wordpress: {
    applicationUser: string,
    applicationPassword: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-wp',
    configKey: 'wordpress'
  },
  defaults: {
    apiEndpoint: undefined,
    applicationUser: undefined,
    applicationPassword: undefined,
    additonnalQueryParams: '&acf?_embed'
  },
  setup (options, nuxt) {
    if (!process.env.WP_API_ENDPOINT) {
      consola.error(new Error('WP_API_ENDPOINT is not defined'))
    }
    
    // Apply nuxt.config.ts public options
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: process.env.WP_API_ENDPOINT || options.apiEndpoint || '',
      additonnalQueryParams: options.additonnalQueryParams
    }

    // Apply nuxt.config.ts private options
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: options.applicationUser || process.env.WP_APPLICATION_USER || undefined,
      applicationPassword: options.applicationPassword || process.env.WP_APPLICATION_PASSWORD || undefined
    }
    
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime', "composables"));
  }
})
