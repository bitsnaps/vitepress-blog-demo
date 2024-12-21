// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Lang from './layouts/Lang.vue'
import Clean from './layouts/Clean.vue'
import NewLayout from './layouts/NewLayout.vue'
import CSButton from './components/CSButton.vue'
import './style.css'
import CSContact from './components/CSContact.vue'
import CSPosts from './components/CSPosts.vue'

export default {
  extends: DefaultTheme,
  Layout: Lang, // support lang through cookie
  // Layout: Clean // Custom layout
  // Layout: NewLayout, // Custom layout
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // A layout registered as a component
    app.component('clean', Clean)
    app.component('CSButton', CSButton)
    app.component('CSContact', CSContact)
    app.component('CSPosts', CSPosts)
  }
  
} satisfies Theme

