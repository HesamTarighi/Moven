// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Moven',
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ]
    }
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/font.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/clickOutside.js'
  ],

  modules: [
    '@vite-pwa/nuxt',
    'nuxt-mdi',
    'nuxt-swiper'
  ],

  // PWA configuration
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Example 1",
      short_name: "example1",
      display: "standalone",
      start_url: ".",
      background_color: "#000000",
      theme_color:"#ffffff",
      description: "Example web app.",
      icons: [
        {
          src: '/icon192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icon512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      share_target: {
        action: "/new-topic",
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "body"
        }
      }
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  // Swiper configuration
  swiper: {
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  }
})