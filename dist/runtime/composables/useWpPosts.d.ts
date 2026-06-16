import type { Post } from '../types/index.js';
interface Options {
    type?: string;
    maxItems?: number;
    categories?: Array<number>;
    lang?: string;
}
declare const useWpPosts: ({ type, maxItems, categories, lang }?: Options) => Promise<Post | Post[]>;
export default useWpPosts;
