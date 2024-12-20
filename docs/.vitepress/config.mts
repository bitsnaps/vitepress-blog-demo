import { defineConfig } from 'vitepress'
import useIcons from './theme/composables/useIcons'

const linkedin = useIcons()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/', // Default: /
  head: [
    // Custom fonts
    // ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
  ],
  // Exclude some files
  srcExclude: ['**/README.md', '**/TODO.md'],
  // outDir: '../public', // Default: ./.vitepress/dist
  // assetsDir: 'static', // Default: assets
  cleanUrls: true, // May not be supported by all hosting providers
  title: "CorpoSense",
  description: "CorpoSense - Enterprise Solutions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // i18nRouting: false, // Default: true
    logo: {
      dark: '/assets/logo_dark.png',
      light: '/assets/logo.png',
      alt: 'logo'
    },
    siteTitle: false,
    aside: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects', activeMatch: '/projects/' },
      { text: 'Training', link: '/training', activeMatch: '/training/' },
      { text: 'Events', link: '/events', activeMatch: '/events/' },
      { text: 'Contact', link: '/contact' },
      // Custom component must be globally registerd via `Theme.enhanceApp()`
      // {
      //   text: 'My Menu',
      //   items: [
      //     {
      //       component: 'MyCustomComponent',
      //       // Optional props to pass to the component
      //       props: {
      //         title: 'My Custom Component'
      //       }
      //     }
      //   ]
      // },
    ],
    outline: false, // disable sidebar for all viewports
    sidebar: [
      // {
      //   text: 'Menu',
      //   collapsed: false,
      //   items: [
      //     { text: 'Projects', link: '/projects' },
      //     { text: 'Events', link: '/events' },
      //     { text: 'Contact', link: '/contact' }
      //   ]
      // }
    ],
    socialLinks: [
      // Disabled while working offline
      { icon: { svg: linkedin }, link: 'https://www.linkedin.com/company/corposense' },
      // { icon: 'facebook', link: 'https://www.facebook.com/SarlCorpoSense/' },
      // { icon: 'twitter', link: 'https://twitter.com/dataFighters' },
      // { icon: 'github', link: 'https://github.com/corposense' },
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    returnToTopLabel: 'Goto top',
    langMenuLabel: 'Languages',
    externalLinkIcon: true,
    docFooter: {
      prev: '&lt; - Previous',
      next: 'Next - &gt;'
    },
    footer: {
      message: `Powered by CorpoSense`,
      copyright: `Copyright &copy; ${new Date().getFullYear()}`
    }
  },
  markdown: {
    // default alert titles
    container: {
      tipLabel: 'Hint',
      warningLabel: 'Warn',
      dangerLabel: 'Alert',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  }
})
