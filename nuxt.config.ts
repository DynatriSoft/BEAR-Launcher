// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },

  i18n: {
    strategy: 'no_prefix',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'bear_i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'us.json'
      },
      {
        code: 'pt',
        language: 'pt-BR',
        file: 'br.json'
      },
    ],
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
  ],
})