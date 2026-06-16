import { useAsyncData, useRuntimeConfig } from "#imports";
import consola from "consola";
import useWpLang from "./useWpLang.js";
const useWpTaxonomy = async ({ taxonomy, lang } = {}) => {
  const resolvedLang = lang ?? useWpLang();
  const langKey = resolvedLang ? `-${resolvedLang}` : "";
  const { data, error } = await useAsyncData(`taxonomy-${taxonomy}${langKey}`, async () => {
    const { apiEndpoint } = useRuntimeConfig().public.wordpress;
    const langParam = resolvedLang ? `?lang=${resolvedLang}` : "";
    const taxonomyData = await $fetch(`${apiEndpoint}/taxonomies/${taxonomy}`);
    const terms = await $fetch(`${apiEndpoint}/${taxonomy}${langParam}`);
    return {
      ...taxonomyData,
      terms
    };
  });
  if (error.value) {
    consola.error(error);
  }
  return data.value;
};
export default useWpTaxonomy;
