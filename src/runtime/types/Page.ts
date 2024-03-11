export type Page = {
  id: number,
  date: string,
  date_gmt: string,
  guid: {
      rendered: string
  },
  modified: string,
  modified_gmt: string,
  slug: string,
  status: string,
  type: string,
  link: string,
  title: {
      rendered: string
  },
  content: {
      rendered: string,
      protected: boolean
  },
  excerpt: {
      rendered: string,
      protected: boolean
  },
  author: number,
  featured_media: number,
  parent: number,
  menu_order: number,
  comment_status: string,
  ping_status: string,
  template: string,
  meta: {
      footnotes: string
  },
  _links: {
      self: { href: string }[],
      collection: { href: string }[],
      about: { href: string }[],
      author: {
          embeddable: boolean,
          href: string
      }[],
      replies: {
          embeddable: boolean,
          href: string
      }[],
      "version-history": {
          count: number,
          href: string
      }[],
      "predecessor-version": {
          id: number,
          href: string
      }[],
      "wp:attachment": { href: string }[],
      curies: {
          name: string,
          href: string,
          templated: boolean
      }[]
  },
  acf: any
}