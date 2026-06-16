import { useAsyncData, useRuntimeConfig } from "#imports";
import consola from "consola";
import useWpLang from "./useWpLang.js";
const useWpPosts = async ({ type = "posts", maxItems = 6, categories = [], lang } = {}) => {
  const resolvedLang = lang ?? useWpLang();
  const langKey = resolvedLang ? `-${resolvedLang}` : "";
  const { data, error } = await useAsyncData(`all_posts_${type}${langKey}`, async () => {
    const { apiEndpoint, additonnalQueryParams } = useRuntimeConfig().public.wordpress;
    const params = new URLSearchParams({
      per_page: String(maxItems),
      categories: categories.join(",")
    });
    if (resolvedLang) params.set("lang", resolvedLang);
    return $fetch(`${apiEndpoint}/${type}?${params.toString()}${additonnalQueryParams}`);
  });
  if (error.value) {
    consola.error(error);
  }
  if (!data.value || data.value.length === 0) {
    consola.error(`No ${type} found`);
    return {};
  }
  return data.value;
};
export default useWpPosts;
