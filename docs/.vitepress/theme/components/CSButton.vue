<script lang="ts" setup>
import { VPButton } from 'vitepress/theme'

defineProps<{
    text: string
}>()
</script>

<template>
  <VPButton class="button" :text="text" />
</template>

<style scoped>
.button {
  max-width: fit-content;
  padding: 0 25px !important;
  margin: 5px 0;
  font-weight: 800;
  font-size: var(--vp-code-font-size)*2 !important;
  color: var(--cp-c-white) !important;
  background-color: var(--vp-c-red-3) !important;
}
</style>