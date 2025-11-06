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
        },
        {
          innerHTML: '',
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': '7fa05be7-2d37-4c40-ae0b-8ca27bfc156e'
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

