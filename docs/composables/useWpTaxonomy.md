# useWpTaxonomy

`useWpTaxonomy` is a composable function that fetches a WordPress taxonomy by its slug. It returns a Promise that resolves to a `Taxonomy` object.

## Usage
```ts
const taxonomy = await useWpTaxonomy({ taxonomy })
```

## Parameters

- `taxonomy` (string): The slug of the WordPress taxonomy to fetch.