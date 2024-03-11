![nuxt-wp banner](./readme-banner.jpg)

# Wordpress x Nuxt 3

![npm](https://img.shields.io/npm/dt/nuxt-wp)
![npm](https://img.shields.io/npm/v/nuxt-wp)

**Easy queries** 💡
  Get pages, posts data based on current or provided slug. Get posts by categories.
  
**Handles menu** 🧭 
  Retrieves your menus.

**Contact Form 7 support** ✉️
  Displays a form based on your CF7 config and submit it automatically through API.

[Documentation](https://nuxt-wp.pages.dev).

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- An accessible Wordpress instance, with API enabled.
- [Wordpress Application credentials](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) to use advanced features (Optional):
  - Menus
  - Contact form

## Installation

### Setup

You can install `nuxt-wp` using npm, pnpm, yarn or bun:

```sh
# Using npm
$ npm add -D nuxt-wp

# Using pnpm
$ pnpm add -D nuxt-wp

# Using yarn
$ yarn add -D nuxt-wp

# Using bun
$ bun add -D nuxt-wp
```

Then, add `nuxt-wp` to your Nuxt configuration:

```ts
// nuxt-config.ts
export default defineNuxtConfig({
  modules: ['nuxt-wp'],
})
```

### Config

In order to work, you need to provide the API endpoint:

```sh
# .env
WP_API_ENDPOINT=https://your-wordpress-site.com/wp-json
```

```ts
// nuxt-config.ts
export default defineNuxtConfig({
  wordpress:{
    apiEndpoint: 'https://your-wordpress-site.com/wp-json',
  },
})
```

If you want to use advanced features, you need to provide Application Credentials too:

```sh
# .env
WP_API_ENDPOINT=https://your-wordpress-site.com/wp-json
WP_APPLICATION_USER=your-username
WP_APPLICATION_PASSWORD=your-password
```

```ts
// nuxt-config.ts
export default defineNuxtConfig({
  wordpress:{
    apiEndpoint: 'https://your-wordpress-site.com/wp-json

',


    applicationUser: 'your-username',
    applicationPassword: 'your-password'
  },
})
```

See more in [Documentation](https://nuxt-wp.pages.dev).