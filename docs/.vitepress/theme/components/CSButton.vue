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
  font-size: large !important;
  color: black !important;
  background-color: red !important;
}
</style>