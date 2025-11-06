export default defineNuxtConfig({
  extends: ['docus'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      script: [
        {
          src: 'https://sponsorapp.io/platform.js?p=b23aa2521d1f6a99',
          async: true,
          defer: true
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Complete documentation for Moto32 open-source motorcycle control unit - ESP32-based alternative to Motogadget M-Unit Blue'
        },
        {
          property: 'og:title',
          content: 'Moto32 Documentation'
        },
        {
          property: 'og:description',
          content: 'Complete documentation for Moto32 open-source motorcycle control unit'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
  
  compatibilityDate: '2024-10-07'
})

