// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    typedPages: true,
  },
  modules: ["@kgierke/nuxt-basic-auth"],
  basicAuth: {
    enabled: true,
    users: [
      {
        username: "admin",
        password: "admin",
      },
    ],
  },
});
