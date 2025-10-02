export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    
    content: {
      highlight: {
        theme: {
          default: 'github-dark',
          dark: 'github-dark',
        }
      },
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        }
      }
    },
  
    app: {
      head: {
        title: 'Professional Portfolio',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Professional portfolio and blog' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
      pageTransition: { name: 'page', mode: 'out-in' }
    },
  
    css: ['~/assets/css/main.css'],
  
    nitro: {
      preset: 'cloudflare-pages'
    },
  
    compatibilityDate: '2024-04-03'
  })