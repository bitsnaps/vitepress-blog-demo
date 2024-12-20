<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme'

const props = defineProps<{
  show: Boolean
  altEmail?: string
}>()
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header" />
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div class="modal-footer">
            <slot name="footer">
            <VPButton text="Close" @click="$emit('close')"  />

            <VPButton v-if="altEmail" text="Email directly" @click="$emit('close')" :href="altEmail" />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px 30px;
  border-radius: 5px;
  border: 1px solid var(--vp-button-brand-active-bg);
  background-color: var(--vp-c-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-content {
  display: block;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>