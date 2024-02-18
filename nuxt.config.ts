// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "RechargeZap",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxt/content",
    "@nuxt/image",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
  imports: {
    dirs: ["stores"],
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
  ],
});
