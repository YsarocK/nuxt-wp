import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    apiEndpoint: string | undefined;
    apiEndpointShort: string | undefined;
    additonnalQueryParams: string;
    applicationUser?: string | undefined;
    applicationPassword?: string | undefined;
    homeSlug: string;
    polylang?: {
        enabled?: boolean;
        defaultLanguage?: string;
        languages?: string[];
    };
}
declare module 'nuxt/schema' {
    interface PublicRuntimeConfig {
        wordpress: {
            apiEndpoint: string | undefined;
            apiEndpointShort: string | undefined;
            additonnalQueryParams: string;
            homeSlug: string;
            polylang?: {
                enabled?: boolean;
                defaultLanguage?: string;
                languages?: string[];
            };
        };
    }
    interface RuntimeConfig {
        wordpress: {
            applicationUser: string | undefined;
            applicationPassword: string | undefined;
        };
    }
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { _default as default };
export type { ModuleOptions };
