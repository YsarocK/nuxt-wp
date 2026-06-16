import { useAsyncData, useRuntimeConfig, useRoute } from "#imports";
import consola from "consola";
import useWpLang from "./useWpLang.js";
const useWpPost = async ({ type = "posts", id, slug, lang } = {}) => {
  const route = useRoute();
  const resolvedLang = lang ?? useWpLang();
  const query = id ? id : slug || route.params.slug;
  const langKey = resolvedLang ? `-${resolvedLang}` : "";
  const { data, error } = await useAsyncData(`post-${type}-${query}${langKey}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress;
    const langParam = resolvedLang ? `&lang=${resolvedLang}` : "";
    const url = id ? `${apiEndpoint}/${type}/${id}${resolvedLang ? `?lang=${resolvedLang}` : ""}` : `${apiEndpoint}/${type}?slug=${query}${langParam}`;
    return $fetch(url);
  });
  if (error.value) {
    consola.error(error);
  }
  return id ? data.value : data.value[0];
};
export default useWpPost;
