export type TaxonomyTerm = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: any[];
  acf: any[];
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    "wp:post_type": { href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  };
};