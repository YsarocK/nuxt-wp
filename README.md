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
| `additionalQueryParams` | string   | `'&acf?_embed'` | No       | Additional query parameters to append to the API requests. |
| `applicationUser`     | string   | `''`    | No      | The username for the WordPress application.                                 |
| `applicationPassword` | string   | `''`    | No      | The password for the WordPress application.                                 |

You can provide these options in the `nuxt.config.ts` file like this:

```typescript
export default {
  modules: [
    ['nuxt-wp', {
      apiEndpoint: 'https://your-wordpress-site.com/wp-json',
      additionalQueryParams: '&acf?_embed',
      applicationUser: 'your-username',
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
const posts = await useWpPosts({ type, maxItems, categories })
```

**Parameters:**

- `type` (string, optional): The type of the WordPress posts to fetch. Defaults to 'posts'.
- `maxItems` (number, optional): The number of posts to fetch. Defaults to 6.
- `categories` (Array, optional): Array of categories to filter by.

# Components

## WpCF7Form Component

The `WpCF7Form` component is used to create a form using the Contact Form 7 plugin in WordPress.

### Usage

Here is an example of how to use the `WpCF7Form` component:

```vue
<WpCF7Form :id="formId" :wpcf7_unit_tag="unitTag" />
```

### Props

- `id` (string | number): The ID of the form to be fetched from the WordPress API.
- `wpcf7_unit_tag` (string): The unit tag for the form.

### Behavior

The `WpCF7Form` component fetches the form data from the WordPress API using the provided `id`. It then renders the form fields based on the fetched data. The form submission is handled by the `handleSubmit` function, which sends a POST request to the `/api/submit-form` endpoint with the form data.

### Error Handling

If there are any errors during the form submission, the error messages will be displayed next to the corresponding form fields.

### Styling

The `WpCF7Form` component uses the following CSS classes for styling:

- `wpcf`: This class is applied to the form element.
- `wpcf-field`: This class is applied to each form field.
- `wpcf-field--${field.type}`: This class is applied to each form field, where `${field.type}` is the type of the form field (e.g., `text`, `email`, `submit`, etc.).
- `wpcf-field-error`: This class is applied to the error message of each form field.

You can override these classes in your CSS to customize the appearance of the form. For example:

```css
.wpcf {
  /* styles for the form */
}

.wpcf-field {
  /* styles for the form fields */
}

.wpcf-field--text {
  /* styles for text fields */
}

.wpcf-field--email {
  /* styles for email fields */
}

.wpcf-field--submit {
  /* styles for submit button */
}

.wpcf-field-error {
  /* styles for error messages */
}
```

Please note that these styles should be scoped to the component where the `WpCF7Form` is used to avoid affecting other components.
