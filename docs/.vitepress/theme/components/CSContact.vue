<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme'
import CSModal from './CSModal.vue'

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
            <CSModal :show="modalOpen" @close="modalOpen = false" :altEmail="altEmail">
              <template #header>
                <h3>{{ result }}</h3>
              </template>
            </CSModal>
  
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
                  <option value="Consulting">Consulting</option>
                  <option value="Sponsoring">Sponsoring</option>
                  <option value="Training">Training</option>
                  <option value="Job">Job</option>
                  <option value="Other">Other</option>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  padding: 48px 24px;
  background-color: var(--vp-c-bg-soft);
}

.contact-content {
  max-width: 1152px;
  margin: 0 auto;
}

.contact-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
}

.contact-wrapper {
  display: flex;
  gap: 48px;
}

.contact-form {
  flex: 1;
  max-width: 600px;
}

.contact-form p {
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
}

.form-element {
  margin-bottom: 24px;
}

.form-element.top {
  margin-bottom: 16px;
}

.form-element label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.form-element input,
.form-element select,
.form-element textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.form-element input::placeholder,
.form-element textarea::placeholder {
  color: var(--vp-c-text-3);
}

.form-element select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

.form-element textarea {
  min-height: 120px;
  resize: vertical;
}

.form-element.submit {
  margin-top: 32px;
}

/* Style for the VPButton component - if needed */
.vp-button {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-white);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.vp-button:hover {
  background-color: var(--vp-c-brand-dark);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
  }

  .contact-form {
    max-width: 100%;
  }
}

/* Focus states */
.form-element input:focus,
.form-element select:focus,
.form-element textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}
</style>