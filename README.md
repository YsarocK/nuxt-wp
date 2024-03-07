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

## Options

Here are the options you can provide to the module:

| Option                | Type     | Default | Required | Description                                                                 |
|-----------------------|----------|---------|----------|-----------------------------------------------------------------------------|
| `apiEndpoint`         | string   | `''`    | Yes      | The endpoint of your WordPress API.                                         |
| `additionalQueryParams` | string   | `'&acf?_embed'` | No       | Additional query parameters to append to the API request. |
| `applicationUser`     | string   | `''`    | No      | The username for the WordPress application.                                 |
| `applicationPassword` | string   | `''`    | No      | The password for the WordPress application.                                 |

You can provide these options in the `nuxt.config.ts` file like this:

```typescript
export default {
  modules: [
    ['nuxt-wp', {
      apiEndpoint: 'https://your-wordpress-site.com/wp-json',
      additionalQueryParams: '&acf?_embed',
      application

User

: 'your-username',
      applicationPassword: 'your-password'
    }]
  ]
}
```

Alternatively, you can set these options directly in your `.env` file:

```env
WP_API_ENDPOINT=https://your-wordpress-site.com/wp-json
WP_ADDITIONAL_QUERY_PARAMS=&acf?_embed
WP_APPLICATION_USER=your-username
WP_APPLICATION_PASSWORD=your-password
```

Remember to replace `'https://your-wordpress-site.com/wp-json'`, `'your-username'`, and `'your-password'` with your actual WordPress API endpoint, username, and password.

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

`useWpPost` is a composable function that fetches a WordPress post by its slug. It returns a Promise that resolves to a `Post` object.

```ts
const post = await useWpPost({ type, slug })
```

**Parameters:**

- `type` (string, optional): The type of the WordPress post to fetch. Defaults to 'posts'.
- `slug` (string, optional): The slug of the WordPress post to fetch. If not provided, the current route path will be used.

## useWpPosts

`useWpPosts` is a composable function that fetches a list of WordPress posts. It returns a Promise that resolves to an array of `Post` objects.

```ts
const posts = await useWpPosts({ type, maxItems })
```

**Parameters:**

- `type` (string, optional): The type of the WordPress posts to fetch. Defaults to 'posts'.
- `maxItems` (number, optional): The number of posts to fetch. Defaults to 6.
