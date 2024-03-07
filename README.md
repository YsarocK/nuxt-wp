# Installation and Configuration

## Installation

To install this module, you can use npm:

```sh
npm install nuxt-wp
```

Or with yarn:

```sh
yarn add nuxt-wp
```

## Configuration

To configure this module, you need to add the necessary configuration information to your `nuxt.config.ts` file. Here is an example of configuration:

```typescript
export default {
  modules: [
    ['nuxt-wp', {
      // options
    }]
  ]
}
```

# Composables

## useWpMenu

`useWpMenu` is a composable function that fetches a WordPress menu by its ID. It returns a Promise that resolves to a `Menu` object.

```ts
const menu = await useWpMenu({ menuId })
```

**Parameters:**

- `menuId` (number): The ID of the WordPress menu to fetch.

## useWpPage

`useWpPage` is a composable function that fetches a WordPress page by its slug. It returns a Promise that resolves to a `Page` object.

```ts
const page = await useWpPage({ slug })
```

**Parameters:**

- `slug` (string, optional): The slug of the WordPress page to fetch. If not provided, the current route path will be used.

## useWpPost

`useWpPost` is a composable function that fetches a WordPress post by its slug or ID. It returns a Promise that resolves to a `Post` object.

```ts
const post = await useWpPost({ type })
```

**Parameters:**

- `type` (string, optional): The type of the WordPress post to fetch. Defaults to 'posts'.

Each of these composables requires the `apiEndpoint`, `applicationUser`, and `applicationPassword` to be set in the `nuxt.config.ts` file or in the environment variables.