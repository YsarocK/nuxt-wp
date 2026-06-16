import type { Page } from '../types/index.js';
interface Options {
    slug?: string;
    slugs?: Record<string, string>;
    lang?: string;
}
declare const useWpPage: ({ slug, slugs, lang }?: Options) => Promise<Page>;
export default useWpPage;
