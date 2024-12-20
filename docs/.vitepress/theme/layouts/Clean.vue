<script setup lang="ts">
// import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, useRouter } from 'vitepress'
import { VPButton } from 'vitepress/theme'

const { page } = useData()
const route = useRoute()
const $router = useRouter()
</script>

<template>
  <!-- <DefaultTheme.Layout /> -->
  <div class="container">
    <div class="page">
      <h1>{{ page.title }}</h1>
    </div>
    
    <VPButton class="button" text="Home" @click="$router.go('/')" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 25px;
}
.page {
  padding-top: var(--vp-nav-height);
  justify-items: c;
  /* justify-content: flex-start; */
}
.button {
  max-width: fit-content;
}
</style>