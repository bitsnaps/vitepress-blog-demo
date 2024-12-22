---
# https://vitepress.dev/reference/default-theme-home-page
layout: home # other default layouts: doc, page
title: Home
hero:
  name: CorpoSense
  text: "حلول للشركات"
  tagline: حلول / خدمات / دعم فني
  image:
    src: /network.svg
    alt: logo
  actions:
    - theme: brand
      text: اتصل بنا
      link: /contact
    - theme: alt
      text: المشاريع
      link: /projects
    - theme: alt
      text: دورات تدريبية
      link: /training

features:
  - title: استشارة
    details: خدمات استشارية في نظم المعلومات
  - title: حلول
    details: إدراج حلول رقمية من أجل تحسين الآداء
    link: /projects
  - icon: 🛠️
    title: الدعم الفني
    details: تقديم الدعم الفني من أجل سير أحسن للخدمات التجارية والعمليات التسييرية
---
<script setup>
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { data } from '/info.data.ts'

const { hasSidebar } = useSidebar()
const { page } = useData()
</script>

<!-- <h1 v-if="hasSidebar">{{ page.title }}</h1> -->
<CSButton text="Read more..." />
:tada: :100: دورة تدريبية جديدة

نحن اليوم: {{ data.now }}

::: info
بيانات مفيدة
:::

::: tip
نصائح للاستخدام
:::

::: warning
تنبيه هام
:::

::: danger Alert
خطر استخدام
:::

::: details للتواصل
- معلومات:
- العنوان: 
- هاتف:
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