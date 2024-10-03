import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Mighty Way Solution",
      meta: [{ name: "description", content: "Everything about - Nuxt-3" }],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/new/images/icons/logo.jpg",
        },
      ],
    },
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-09-26",
});
