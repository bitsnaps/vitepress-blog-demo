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
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ar: {
      label: 'العربية',
      lang: 'ar', // optional, will be added  as `lang` attribute on `html` tag
      link: '/ar', // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
      themeConfig: {
        nav: [
          { text: 'الرئيسية', link: '/' },
          { text: 'المشاريع', link: '/projects', activeMatch: '/projects/' },
          { text: 'التكوين', link: '/training', activeMatch: '/training/' },
          { text: 'أحداث', link: '/events', activeMatch: '/events/' },
          { text: "الفريق", link: '/teams' },
        ],
        docFooter: {
          prev: '&lt; - السابق',
          next: 'التالي - &gt;'
        },
      }
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr', // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Projets', link: '/projects', activeMatch: '/projects/' },
          { text: 'Formations', link: '/training', activeMatch: '/training/' },
          { text: 'Evénement', link: '/events', activeMatch: '/events/' },
          { text: "L'équipe", link: '/teams' },
        ],
        docFooter: {
          prev: '&lt; - Précédent',
          next: 'Suivant - &gt;'
        },
      }
    }    
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // i18nRouting: false, // Default: true
    logo: {
      dark: '/logo_dark.png',
      light: '/logo.png',
      alt: 'logo'
    },
    siteTitle: false,
    aside: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects', activeMatch: '/projects/' },
      { text: 'Training', link: '/training', activeMatch: '/training/' },
      { text: 'Events', link: '/events', activeMatch: '/events/' },
      { text: 'Solutions', link: '/solutions', activeMatch: '/solutions/' },
      { text: 'Teams', link: '/teams' },
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
      { icon: 'facebook', link: 'https://www.facebook.com/SarlCorpoSense/' },
      { icon: 'twitter', link: 'https://twitter.com/dataFighters' },
      { icon: 'github', link: 'https://github.com/corposense' },
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
    search: { //https://vitepress.dev/reference/default-theme-search
      provider: 'local',
      options: {
        // locales: { "fr":{"placeholder":...}
        translations: {
          button: {
            buttonText: 'Quick Search...'
          },
          modal: {
            noResultsText: 'No results for: ',
            footer: {
              closeText: 'Close',
              selectText: 'Select',
              navigateText: 'Navigate'
            }
          }
        }
        //} //locales
      }
    },
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
