# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- An accessible Wordpress instance, with API enabled.
- <Badge type="warning" text="Optional" /> [Wordpress Application credentials](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) to use advanced features :
  - Menus
  - Contact form

## Installation


### Setup

::: code-group

```sh [npm]
$ npm add -D nuxt-wp
```

```sh [pnpm]
$ pnpm add -D nuxt-wp
```

```sh [yarn]
$ yarn add -D nuxt-wp
```

```sh [bun]
$ bun add -D nuxt-wp
```
:::

::: code-group
```ts [nuxt-config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-wp'],
})
```
:::



### Config

In order to work, you need to provide the API endpoint :

::: code-group

```sh [.env]
WP_API_ENDPOINT=https://your-wordpress-site.com/wp-json
```

```ts [nuxt-config.ts]
export default defineNuxtConfig({
  wordpress:{
    apiEndpoint: 'https://your-wordpress-site.com/wp-json',
  },
})
```
:::

If you want to use advances features, you need to provide Application Credentials too :

::: code-group
```sh [.env]
WP_API_ENDPOINT=https://your-wordpress-site.com/wp-json
WP_APPLICATION_USER=your-username
WP_APPLICATION_PASSWORD=your-password
```

```ts [nuxt-config.ts]
export default defineNuxtConfig({
  wordpress:{
    apiEndpoint: 'https://your-wordpress-site.com/wp-json',
    applicationUser: 'your-username',
    applicationPassword: 'your-password'
  },
})
```
:::