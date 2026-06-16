import type { Menu } from '../types/index.js';
interface Options {
    menuId: number;
    lang?: string;
}
declare const useWpMenu: ({ menuId, lang }: Options) => Promise<Menu>;
export default useWpMenu;
