// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/'
  },
  css: ['~/assets/css/style.css'],
  image: {
    dir: '~/assets/img',
}
})
