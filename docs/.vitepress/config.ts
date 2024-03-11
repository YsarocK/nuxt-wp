import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nuxt WP",
  description: "Easy to use Nuxt 3 module to fetch data from WordPress REST API.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get started', link: '/introduction/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get started', items: [
            { text: "Prerequisites", link: '/introduction/getting-started#prerequisites' },
            { text: "Installation", link: '/introduction/getting-started#installation' },
          ] },
          { text: 'Options', items: [
            { text: "Available options", link: '/introduction/options#available-options' },
            { text: "Set options", link: '/introduction/options#set-options' }
          ] }
        ]
      },
      {
        text: 'Composables',
        items: [
          { text: 'useWpMenu', link: "composables/useWpMenu" },
          { text: 'useWpPage', link: "composables/useWpPage" },
          { text: 'useWpPost', link: "composables/useWpPost" },
          { text: 'useWpPosts', link: "composables/useWpPosts" },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'WpCF7Form', link: "components/WpCF7Form" },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YsarocK/nuxt-wp' }
    ]
  }
})
