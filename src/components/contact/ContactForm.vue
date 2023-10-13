<template>
  <form class="form form-fill" name="form-name" value="contact"  method="post" action="https://formspree.io/f/mjvppqow">
    <h5 class="form__title"> Get in touch </h5>
    <div class="form__social_icons">
      <a v-for="platform in platforms" :key="platform.id" :href="platform.url" :title="platform.name" class="form__social_icons--links" :style="{ backgroundColor: platform.color }">
        <app-icon :icon="platform.icon" hover="white" size="1.8" />
      </a>
    </div>
    <p class="form__separator">
      OR
    </p>
    <div class="form__fields">
      <div class="form__field">
        <label for="email" class="form__field--label"> Email address </label>
        <div class="form__field--input">
          <div class="icon">
            <app-icon icon="gmail" size="1.5" />
          </div>
          <input name="email" type="email" autocomplete="email" class="text_box" placeholder="name@website.com" required>
        </div>
      </div>
      <div class="form__field">
        <label for="name" class="form__field--label"> Name </label>
        <div class="form__field--input">
          <div class="icon">
            <app-icon icon="" size="1.5" />
          </div>
          <input name="name" type="text" autocomplete="name" class="text_box" placeholder="Your Name" required>
        </div>
      </div>
      <div class="form__field">
        <label for="email" class="form__field--label"> Message </label>
        <textarea name="message" type="text" autocomplete="none" class="form__field--text_area" placeholder="Type in your message" required></textarea>
      </div>
    </div>
    <button class="form__submit_action" type="submit">
      Leave a Message
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SocialMedia } from '../app/SocialMedia.vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  data: () => ({
    platforms: [
      {
        id: 1,
        icon: 'github',
        name: 'Github',
        url: 'https://github.com/sanmi01',
        color: '#171515'
      },
      {
        id: 2,
        icon: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/SanmiAwelewa',
        color: '#1DA1F2'
      },
      {
        id: 3,
        icon: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sanmi01',
        color: '#0072b1'
      },
      {
        id: 4,
        icon: 'whatsapp',
        name: 'WhatsApp',
        url: 'https://wa.me/%2B2348029614315',
        color: '#25D366'
      },
      {
        id: 5,
        icon: 'file',
        name: 'CV',
        url: 'https://docs.google.com/document/d/1lgjebsVIp2-sLJAhG74nODNLN8ez_MxD/edit',
        color: '#171515'
      },
    ] as SocialMedia[]
  })
})
</script>

<style lang="scss" scoped>
@import '../../styles/components/contact/ContactForm.scss' ;
</style>
