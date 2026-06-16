import { defineEventHandler } from "h3";
export default defineEventHandler(async () => {
  const { apiEndpoint } = useRuntimeConfig().public.wordpress;
  const { applicationUser, applicationPassword } = useRuntimeConfig().wordpress;
  if (!applicationUser || !applicationPassword) {
    return new Response("WP_APPLICATION_USER or WP_APPLICATION_PASSWORD are not defined", { status: 500 });
  }
  return $fetch(`${apiEndpoint}/settings`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${applicationUser}:${applicationPassword}`).toString("base64")}`
    }
  });
});
