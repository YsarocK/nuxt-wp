import type { TaxonomyTerm } from './TaxonomyTerm';

export type Taxonomy = {
  name: string;
  slug: string;
  description: string;
  types: string[];
  hierarchical: boolean;
  rest_base: string;
  rest_namespace: null | string;
  _links: {
    collection: { href: string }[];
    "wp:items": { href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  },
  terms: TaxonomyTerm[];
};