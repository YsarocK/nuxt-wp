# useWpPost

`useWpPost` is a composable function that fetches a WordPress post by its slug. It returns a Promise that resolves to a `Post` object.

## Usage
```ts
const post = await useWpPost({ type, slug })
```

## Parameters

- `type` (string, optional): The type of the WordPress post to fetch. Defaults to 'posts'.
- `slug` (string, optional): The slug of the WordPress post to fetch. If not provided, the current route path will be used.