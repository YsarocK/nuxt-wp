# useWpPost

`useWpPost` is a composable function that fetches a WordPress post by its id. It returns a Promise that resolves to a `Post` object.

## Usage
```ts
const post = await useWpPost({ type, id })
```

## Parameters

- `type` (string, optional): The type of the WordPress post to fetch. Defaults to 'posts'.
- `id` (number, optional): The number of the WordPress post to fetch. If not provided, the current route path will be used.