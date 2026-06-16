import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir, addServerHandler } from '@nuxt/kit';
import consola from 'consola';

const module$1 = defineNuxtModule({
  meta: {
    name: "nuxt-wp",
    configKey: "wordpress",
    compatibility: { nuxt: ">=3.13.0" }
  },
  defaults: {
    apiEndpoint: process.env.WP_API_ENDPOINT,
    apiEndpointShort: process.env.WP_API_ENDPOINT,
    applicationUser: process.env.WP_APPLICATION_USER,
    applicationPassword: process.env.WP_APPLICATION_PASSWORD,
    additonnalQueryParams: "&acf?_embed",
    homeSlug: "/home"
  },
  setup(options, nuxt) {
    if (!options.apiEndpoint) {
      consola.error(new Error("No API Endpoint found. Please provide a valid API Endpoint via nuxt.config.ts or .env file."));
    }
    nuxt.options.runtimeConfig.public.wordpress = {
      apiEndpoint: options.apiEndpoint + "/wp/v2",
      apiEndpointShort: options.apiEndpointShort,
      additonnalQueryParams: options.additonnalQueryParams,
      homeSlug: options.homeSlug,
      polylang: options.polylang
    };
    nuxt.options.runtimeConfig.wordpress = {
      applicationUser: options.applicationUser,
      applicationPassword: options.applicationPassword
    };
    const resolver = createResolver(import.meta.url);
    addComponentsDir({
      path: resolver.resolve("./runtime", "components"),
      prefix: "Wp"
    });
    addImportsDir(resolver.resolve("./runtime", "composables"));
    addServerHandler({ route: "/api/submit-form", method: "post", handler: resolver.resolve("./runtime/server/api/submit-form") });
    addServerHandler({ route: "/api/_wp/menu", method: "get", handler: resolver.resolve("./runtime/server/api/_wp/menu") });
    addServerHandler({ route: "/api/_wp/settings", method: "get", handler: resolver.resolve("./runtime/server/api/_wp/settings") });
    addServerHandler({ route: "/api/_wp/cf7-form", method: "get", handler: resolver.resolve("./runtime/server/api/_wp/cf7-form") });
  }
});

export { module$1 as default };
