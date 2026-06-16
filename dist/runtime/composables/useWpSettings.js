import { useAsyncData } from "#imports";
import consola from "consola";
const useWpSettings = async () => {
  const { data, error } = await useAsyncData("wp-settings", async () => {
    return $fetch("/api/_wp/settings");
  });
  if (error.value) {
    consola.error(error);
  }
  return data.value;
};
export default useWpSettings;
