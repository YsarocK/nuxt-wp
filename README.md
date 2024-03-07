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

## useWpPosts

`useWpPosts` is a composable function that fetches a list of WordPress posts. It returns a Promise that resolves to an array of `Post` objects.

```ts
const posts = await useWpPosts({ type, maxItems })
```

**Parameters:**

- `type` (string, optional): The type of the WordPress post to fetch. Defaults to 'posts'.
- `maxItems` (number, optional): The amount of posts to fetch. Defaults to 6.