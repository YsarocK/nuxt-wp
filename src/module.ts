import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'
import consola from 'consola'

export interface ModuleOptions {
  apiEndpoint?: string,
  applicationUser?: string | undefined,
  applicationPassword?: string | undefined,
  additonnalQueryParams?: string | undefined
}

export interface RuntimeConfig {
  public: {
    wordpress: {
      apiEndpoint: string,
      additonnalQueryParams: string | undefined
    }
  },
  wordpress: {
    applicationUser: string | undefined,
    applicationPassword: string | undefined
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
      consola.warn('WP_API_ENDPOINT is not defined')
    }
    
    // Apply nuxt.config.ts public options
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: process.env.WP_API_ENDPOINT || options.apiEndpoint || '',
      additonnalQueryParams: options.additonnalQueryParams || '&acf?_embed'
    }

    // Apply nuxt.config.ts private options
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: options.applicationUser || process.env.WP_APPLICATION_USER || '',
      applicationPassword: options.applicationPassword || process.env.WP_APPLICATION_PASSWORD || ''
    }
    
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime', "composables"));
  }
})
