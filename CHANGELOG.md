# Changelog


## v3.0.0

[compare changes](https://github.com/YsarocK/nuxt-wp/compare/v2.3.6...v3.0.0)

### 🚀 Enhancements

- Nuxt 4 compatibility (dual support Nuxt >=3.13 and Nuxt 4) ([ea4e831](https://github.com/YsarocK/nuxt-wp/commit/ea4e831))
- Authenticated WP requests (menu, settings, CF7 form) now proxied via server-side routes `/api/_wp/*` — credentials no longer exposed client-side

### 🩹 Fixes

- Fix duplicate `useAsyncData` keys in `useWpPost` and `useWpTaxonomy` causing data collisions

### 💅 Refactors

- `useWpMenu`, `useWpSettings` composables no longer require `applicationUser`/`applicationPassword` client-side

### 📦 Build

- Upgrade to `@nuxt/module-builder` v1, `nuxt` v4, `vitest` v4, `vue-tsc`
- Update package exports (remove CJS, use `.d.mts` types)

### ❤️ Contributors

- Etienne <hello@etiennemoureton.fr>

## v2.3.6

[compare changes](https://github.com/YsarocK/nuxt-wp/compare/v2.3.5...v2.3.6)

### 🩹 Fixes

- Use unique useAsyncData key per page slug ([97d00f7](https://github.com/YsarocK/nuxt-wp/commit/97d00f7))

### ❤️ Contributors

- Pierre <contact@pierrekeller.com>

