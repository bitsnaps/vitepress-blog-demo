<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme'
import DGModal from './DGModal.vue'

//https://www.digilol.net/blog/contact-form-in-vuejs.html

const props = defineProps<{
  formEndpoint: string
}>()
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        service: '',
        message: ''
      },
      modalOpen: false,
      result: '',
      altEmail: ''
    }
  },
  methods: {
    async submit() {
      axios.post(this.formEndpoint, this.form)
      .then(response => {
        this.modalOpen = true;
        this.result = "Received! Thank you."
        this.altEmail = '';
      })
      .catch(error => {
        this.modalOpen = true;
        this.altEmail = `mailto:hello@domain.tld?subject=${this.form.service}&body=${this.form.message}`
        if (error.request.status == 429) {
                this.result = "Slow down! You made too many requests, try again later."
        } else {
          this.result = "Something went wrong. Please contact us directly or try again later.";
        }
      });
    }
  }
}
</script>

<template>
    <div id="contact" class="contact-section">
      <div class="contact-content">
        <h2 class="contact-title">Contact us</h2>
        <div class="contact-wrapper">
          <div class="contact-form">
            <DGModal :show="modalOpen" @close="modalOpen = false" :altEmail="altEmail">
              <template #header>
                <h3>{{ result }}</h3>
              </template>
            </DGModal>
  
            <form @submit.prevent="submit">
              <p>Leave us a message and we'll respond within 48 hours.</p>
              <div class="form-element top name-container">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name Surname" v-model="form.name" required />
              </div>
              <div class="form-element top email-container">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="name@example.net" v-model="form.email" required />
              </div>
              <div class="form-element">
                <label for="service-selector">I am interested in</label>
                <select id="service-selector" name="service" v-model="form.service" required>
                  <option value="" disabled>Pick a service</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>
              <div class="form-element">
                <label for="message">Message</label>
                <textarea id="message" name="message" v-model="form.message" placeholder="Dear Digilol Team,&#10;Is smoking bad for my computer?" required></textarea>
              </div>
              <div class="form-element submit">
                <VPButton text="Submit" />
              </div>
            </form>
          </div>
  