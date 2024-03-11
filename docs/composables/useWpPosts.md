# useWpPosts

`useWpPosts` is a composable function that fetches a list of WordPress posts. It returns a Promise that resolves to an array of `Post` objects.

## Usage
```ts
const posts = await useWpPosts({ type, maxItems, categories })
```

## Parameters

- `type` (string, optional): The type of the WordPress posts to fetch. Defaults to 'posts'.
- `maxItems` (number, optional): The number of posts to fetch. Defaults to 6.
- `categories` (Array, optional): Array of categories to filter by.