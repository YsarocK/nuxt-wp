# useWpMenu

::: warning
Requires [Application Credentials](/introduction/getting-started.html#config)
:::

`useWpMenu` is a composable function that fetches a WordPress menu by its ID. It returns a Promise that resolves to a `Menu` object.

## Usage
```ts
const menu = await useWpMenu({ menuId })
```

## Parameters

- `menuId` (number): The ID of the WordPress menu to fetch.