<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<!-- More slots at: https://vitepress.dev/guide/extending-default-theme#layout-slots -->
<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
    <template #doc-top>
        doc-top
    </template>
    <template #doc-before>
        doc-before
    </template>
    <template #doc-after>
        doc-after
    </template>
  </Layout>
</template>