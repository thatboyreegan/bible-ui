// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },

    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL || "http://localhost:8000",
      },
    },
  },

  $production: {
    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL,
      },
    },
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  ui: {
    icons: ["bi"],
  },

  googleFonts: {
    families: {
      "Josefin+Sans": true,
      Lato: [100, 300],
      "Crimson Pro": {
        wght: "199..900",
        ital: "199..700",
      },
      Cinzel: [500],
      "Josefin Slab": [400],
    },
  },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon-color.svg" },
      ],
    },
  },
});
