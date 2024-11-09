// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-typed-router",
    "@pinia/nuxt",
  ],
  app: {
    head: {
      title: "Сварка Аргоном | Оренбург",
      meta: [
        { name: "description", content: "Сварка Аргоном в городе Оренбург." },
        {
          name: "keywords",
          content: "Сварка, Аргон, Оренбург, Сварка Аргоном",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Сварка Аргоном | Оренбург" },
        {
          property: "og:description",
          content: "Сварка Аргоном в городе Оренбург.",
        },
        { property: "og:image", content: "~/assets/logo.png" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ru" },
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?lang=ru_RU",
          type: "text/javascript",
        },
      ],
    },
  },
  fonts: {
    google: {
      families: ["Poppins:100,200,300,400,500,600,700,800,900"],
    } as any,
  },
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/_vars.scss" as *; 
          @use "@/assets/scss/_mixins.scss" as *;`,
        },
      },
    },
  },
});
