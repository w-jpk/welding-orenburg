// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/fonts", "@nuxt/image", "nuxt-typed-router"],
  app: {
    head: {
      title: "Сварка Аргоном | Оренбург",
      meta: [
        { name: "description", content: "Сварка Аргоном | Оренбург" },
        { name: "keywords", content: "Сварка Аргоном | Оренбург" },
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
    },
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
