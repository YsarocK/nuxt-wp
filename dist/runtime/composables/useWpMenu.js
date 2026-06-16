import { useAsyncData } from "#imports";
import consola from "consola";
import useWpLang from "./useWpLang.js";
const useWpMenu = async ({ menuId, lang }) => {
  const resolvedLang = lang ?? useWpLang();
  const langKey = resolvedLang ? `-${resolvedLang}` : "";
  const { data, error } = await useAsyncData(`menu-${menuId}${langKey}`, async () => {
    return $fetch("/api/_wp/menu", { query: { menuId, lang: resolvedLang } });
  });
  if (error.value) {
    consola.error(error);
  }
  if (!data.value || data.value.length === 0) {
    consola.error(`No menu with ID "${menuId}" found`);
    return {};
  }
  return data.value;
};
export default useWpMenu;
