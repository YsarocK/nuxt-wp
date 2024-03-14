# useWpPage

`useWpPage` is a composable function that fetches a WordPress page by its slug. It returns a Promise that resolves to a `Page` object.

::: info
For the home page, the slug should be '/home' in Wordpress or changed in config.
:::

## Usage
```ts
const page = await useWpPage({ slug })
```

## Parameters

- `slug` (string, optional): The slug of the WordPress page to fetch. If not provided, the current route path will be used.