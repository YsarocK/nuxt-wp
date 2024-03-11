# WpCF7Form

::: warning
Requires [Application Credentials](/introduction/getting-started.html#config)
:::

The `WpCF7Form` component is used to create a form using the Contact Form 7 plugin in WordPress.

### Usage

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