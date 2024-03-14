import { defineNuxtModule, addImportsDir, createResolver, addComponentsDir, addServerHandler } from '@nuxt/kit'
import consola from 'consola'

export interface ModuleOptions {
  apiEndpoint: string | undefined,
  apiEndpointShort: string | undefined,
  additonnalQueryParams: string,
  applicationUser?: string | undefined,
  applicationPassword?: string | undefined,
  homeSlug: string,
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    wordpress: {
      apiEndpoint: string | undefined,
      apiEndpointShort: string | undefined,
      additonnalQueryParams: string,
      homeSlug: string,
    }
  }

  interface RuntimeConfig {
    wordpress: {
      applicationUser: string | undefined,
      applicationPassword: string | undefined,
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
    apiEndpointShort: process.env.WP_API_ENDPOINT,
    applicationUser: process.env.WP_APPLICATION_USER,
    applicationPassword: process.env.WP_APPLICATION_PASSWORD,
    additonnalQueryParams: '&acf?_embed',
    homeSlug: '/home'

  },
  setup (options, nuxt) {
    if (!options.apiEndpoint) {
      consola.error(new Error('No API Endpoint found. Please provide a valid API Endpoint via nuxt.config.ts or .env file.'))
    }
    
    // Apply nuxt.config.ts public options
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: options.apiEndpoint + '/wp/v2',
      apiEndpointShort: options.apiEndpointShort,
      additonnalQueryParams: options.additonnalQueryParams,
      homeSlug: options.homeSlug
    }

    // Apply nuxt.config.ts private options
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: options.applicationUser,
      applicationPassword: options.applicationPassword
    }
    
    const resolver = createResolver(import.meta.url)
    addComponentsDir({
      path: resolver.resolve('./runtime', "components"),
      prefix: 'Wp'
    })
    addImportsDir(resolver.resolve('./runtime', "composables"));
    addServerHandler({ route:"/api/submit-form", method:"post", handler: resolver.resolve('./runtime/server/api/submit-form') });
  }
})

export {}