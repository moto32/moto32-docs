export default defineAppConfig({
  docus: {
    title: 'Moto32 Documentation',
    description: 'Complete documentation for Moto32 open-source motorcycle control unit',
    url: 'https://moto32.dev', // Change to your actual URL
    image: '/mountains.webp',
    
    socials: {
      github: 'jaksatomovic/motogadget-clone',
      buymeacoffee: {
        label: 'Buy Me a Coffee',
        icon: 'simple-icons:buymeacoffee',
        href: 'https://buymeacoffee.com/iamcanarin'
      }
    },
    
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    
    main: {
      padded: true,
      fluid: true
    },
    
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'Moto32'
    },
    
    footer: {
      credits: {
        icon: 'lucide:heart',
        text: 'Made with love by the Moto32 community',
        href: 'https://github.com/jaksatomovic/motogadget-clone'
      },
      textLinks: [
        {
          text: 'Sponsored by PCBWay',
          href: 'https://www.pcbway.com',
          target: '_blank'
        },
        {
          text: 'Buy Me a Coffee',
          href: 'https://buymeacoffee.com/iamcanarin',
          target: '_blank'
        }
      ],
      iconLinks: [
        {
          icon: 'simple-icons:github',
          href: 'https://github.com/jaksatomovic/motogadget-clone',
          label: 'GitHub'
        },
        {
          icon: 'simple-icons:buymeacoffee',
          href: 'https://buymeacoffee.com/iamcanarin',
          label: 'Buy Me a Coffee'
        }
      ]
    }
  }
})

