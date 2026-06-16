import type { Taxonomy } from '../types/index.js';
interface Options {
    taxonomy?: string;
    slug?: string;
    lang?: string;
}
declare const useWpTaxonomy: ({ taxonomy, lang }?: Options) => Promise<Taxonomy | undefined>;
export default useWpTaxonomy;
