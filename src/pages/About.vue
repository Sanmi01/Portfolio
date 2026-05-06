<template>
  <main>
    <div class="about-page-container">
  <about-title-styled />
  <about-page-header />
  <about-page-paragraph>
    Hi There! My name is Oluwasanmi Awelewa, but you can call me NiCode.
  </about-page-paragraph>
  <!-- <about-page-image /> -->

  <about-page-paragraph>
    I'm a software engineer with over five years of experience, with frontend
  development as my core craft and a deep-rooted passion for React. My journey
  began with an insatiable curiosity for building user interfaces that blend
  functionality with aesthetics seamlessly, and as I delved into the React
  ecosystem, I was captivated by its component-based architecture and ability
  to deliver dynamic, interactive user experiences.
  </about-page-paragraph>

  <about-page-paragraph>
    With a strong focus on React, I've honed my skills in crafting reusable
  components, managing application state efficiently, and implementing
  responsive designs that scale across devices and use cases.
  </about-page-paragraph>
  
  <about-page-paragraph>
    Beyond the frontend, I work comfortably across the stack, building backend
  services with Node.js and NestJS, designing data models in MongoDB, and
  shipping complete end-to-end products. This breadth lets me collaborate
  effectively with teams of any shape and own features from idea to production.
  </about-page-paragraph>
  
  <about-page-paragraph>
  More recently, I've been expanding into AI engineering, building
  AI-powered applications and agentic systems with LLMs, RAG pipelines, and the
  Model Context Protocol. I've worked on multi-agent architectures,
  fine-tuning, and integrating AI into real products, blending my frontend
  instincts with the new capabilities these tools unlock.
  </about-page-paragraph>

  <about-page-paragraph>
    Collaboration and teamwork are essential values in my approach to
    development. Working alongside designers, backend developers, and other
    stakeholders, I believe in fostering an environment where ideas are shared
    openly and where constructive feedback leads to the best possible outcomes.
  </about-page-paragraph>
  
  <about-page-paragraph>
    If you're looking for a software engineer who builds polished frontends,
    ships full-stack products, and brings AI capabilities into the mix, I'd be
    thrilled to collaborate. Let's join forces and create something extraordinary
    together!
  </about-page-paragraph>
</div>
    <div class="about-page-design-elements">
      <hero-bubble
        size="580"
        gradient="linear-gradient(#ff703a21 20%, #7d078200)"
        class="giant-bubble"
      />
      <hero-bubble
        size="380"
        gradient="linear-gradient(45deg, rgb(45 91 117), rgb(154 69 35 / 25%))"
        class="small-bubble"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutPageHeader from '../components/about/AboutPageHeader.vue'
import AboutTitleStyled from '../components/about/AboutTitleStyled.vue'
import AboutPageParagraph from '../components/about/AboutPageParagraph.vue';
import AboutPageImage from '../components/about/AboutPageImage.vue';
import HeroBubble from '../components/home/hero/HeroBubble.vue';

export default defineComponent({
  components: { AboutTitleStyled, AboutPageHeader, AboutPageParagraph, AboutPageImage, HeroBubble },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/pages/about.scss';
</style>
