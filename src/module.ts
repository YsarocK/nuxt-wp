import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'
import consola from 'consola'

export interface ModuleOptions {
  apiEndpoint?: string,
  applicationUser?: string,
  applicationPassword?: string,
  additonnalQueryParams?: string
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

    if (!process.env.WP_APPLICATION_USER) {
      consola.error(new Error('WP_APPLICATION_USER is not defined'))
    }

    if (!process.env.WP_APPLICATION_PASSWORD) {
      consola.error(new Error('WP_APPLICATION_PASSWORD is not defined'))
    }
    
    // Apply nuxt.config.ts public options
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: options.apiEndpoint,
      additonnalQueryParams: options.additonnalQueryParams
    }

    // Apply nuxt.config.ts private options
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: process.env.WP_APPLICATION_USER || options.applicationUser,
      applicationPassword:process.env.WP_APPLICATION_PASSWORD || options.applicationPassword
    }
    
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime', "composables"));
  }
})
