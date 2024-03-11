# Options

## Available options

| Option                | Type     | Default | Required | Description                                                                 |
|-----------------------|----------|---------|----------|-----------------------------------------------------------------------------|
| `apiEndpoint`         | string   | `''`    | Yes      | The endpoint of your WordPress API.                                         |
| `additionalQueryParams` | string   | `'&acf?_embed'` | No       | Additional query parameters to append to the API requests. |
| `applicationUser`     | string   | `''`    | No      | The username for the WordPress application.                                 |
| `applicationPassword` | string   | `''`    | No      | The password for the WordPress application.                                 |

## Set options
::: code-group
```ts [nuxt-config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-wp', {
    // options
  }],

  // Or

  wordpress: {
    // options
  }
})
```
:::