// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import Lang from './layouts/Lang.vue'
import Clean from './layouts/Clean.vue'
import CSButton from './components/CSButton.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  // Layout: Lang // support lang through cookie
  // Layout: Clean // Custom layout
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // A layout registered as a component
    app.component('clean', Clean)
    app.component('CSButton', CSButton)
  }
  
} satisfies Theme

