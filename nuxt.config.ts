import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Mighty Way",
      meta: [{ name: "description", content: "Everything about - Nuxt-3" }],
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
