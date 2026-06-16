import type { Post } from '../types/index.js';
interface Options {
    type?: string;
    id?: number | string;
    slug?: string;
    lang?: string;
}
declare const useWpPost: ({ type, id, slug, lang }?: Options) => Promise<Post>;
export default useWpPost;
