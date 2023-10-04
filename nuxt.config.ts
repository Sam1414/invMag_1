// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@vuestic/nuxt',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: [
      // automatically imports
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs', // import { storeToRefs } from 'pinia'
    ],
  },
})
