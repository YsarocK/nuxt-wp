import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'
import consola from 'consola'

export interface ModuleOptions {
  apiEndpoint: string | undefined,
  additonnalQueryParams: string,
  applicationUser?: string | undefined,
  applicationPassword?: string | undefined,
}

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    wordpress: {
      applicationUser: string | undefined,
      applicationPassword: string | undefined,
    }
  }

  interface PublicRuntimeConfig {
    wordpress: {
      apiEndpoint: string | undefined,
      additonnalQueryParams: string,
    }
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-wp',
    configKey: 'wordpress'
  },
  defaults: {
    apiEndpoint: process.env.WP_API_ENDPOINT,
    applicationUser: process.env.WP_APPLICATION_USER,
    applicationPassword: process.env.WP_APPLICATION_PASSWORD,
    additonnalQueryParams: '&acf?_embed'
  },
  setup (options, nuxt) {
    if (!options.apiEndpoint) {
      consola.error(new Error('No API Endpoint found. Please provide a valid API Endpoint via nuxt.config.ts or .env file.'))
    }
    
    // Apply nuxt.config.ts public options
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: options.apiEndpoint,
      additonnalQueryParams: options.additonnalQueryParams
    }

    // Apply nuxt.config.ts private options
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: options.applicationUser,
      applicationPassword: options.applicationPassword
    }
    
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime', "composables"));
  }
})
