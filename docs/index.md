---
# https://vitepress.dev/reference/default-theme-home-page
layout: home # other default layouts: doc, page
title: Home
hero:
  name: CorpoSense
  text: "Enterprise Solutions"
  tagline: Solution / Service / Support
  image:
    src: /assets/logo_dark.png
    alt: logo
  actions:
    - theme: brand
      text: Contact
      link: /contact
    - theme: alt
      text: Projects
      link: /projects
    - theme: alt
      text: Training
      link: /training

features:
  - title: Consulting
    details: Consulting on IT and Managemgent System
  - title: Integration
    details: Integrating Business Solutions to improve the effeciency of your performance
    link: /projects
  - icon: 🛠️
    title: Support
    details: Support your business operations to avoid any mis-alignment with the pre-defined goals.
---
<script setup>
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { data } from './info.data.ts'

const { hasSidebar } = useSidebar()
const { page } = useData()
</script>

<!-- <h1 v-if="hasSidebar">{{ page.title }}</h1> -->
<CSButton text="Read more..." />
:tada: :100: New Training session has been created!

We are on: {{ data.now }}

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger Alert
This is a dangerous warning.
:::

::: details Contact
- Contact informations:
- Address: 
- Tel:
:::

## Badges

### Info <Badge type="info" text="default" />
### Tip <Badge type="tip" text="^1.9.0" />
### Warning <Badge type="warning" text="beta" />
### Danger <Badge type="danger" text="caution" />

Copyright &copy; CorpoSense

Made with :heart: in :algeria:

<style>
:root {
  /* --vp-home-hero-name-color: var(--vp-c-brand-1); */
  /* --vp-home-hero-name-color: red; */

  /* Gradient color */
  --vp-home-hero-name-color: transparent;
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff); */
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, red, darkRed);

  /* Custom badges colors */
  --vp-badge-info-border: transparent;
  --vp-badge-info-text: var(--vp-c-text-2);
  --vp-badge-info-bg: var(--vp-c-default-soft);

  --vp-badge-tip-border: transparent;
  --vp-badge-tip-text: var(--vp-c-brand-1);
  --vp-badge-tip-bg: var(--vp-c-brand-soft);

  --vp-badge-warning-border: transparent;
  --vp-badge-warning-text: var(--vp-c-warning-1);
  --vp-badge-warning-bg: var(--vp-c-warning-soft);

  --vp-badge-danger-border: transparent;
  --vp-badge-danger-text: var(--vp-c-danger-1);
  --vp-badge-danger-bg: var(--vp-c-danger-soft);
}

.clip {
  font-size: 120%
}
</style>