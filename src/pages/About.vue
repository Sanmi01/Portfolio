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
        I'm a frontend engineer with a deep-rooted passion for React and creating exceptional web applications. My journey into the world of frontend development began with an insatiable curiosity for building user interfaces that blend functionality with aesthetics seamlessly. As I delved into the React ecosystem, I was captivated by its component-based architecture and its ability to deliver dynamic and interactive user experiences. 
      </about-page-paragraph>
      <about-page-paragraph>
        With a strong focus on React, I've honed my skills in crafting reusable components, managing application state efficiently, and implementing responsive designs. Through hands-on experience with React, I've gained a comprehensive understanding of the library, enabling me to architect scalable and performant applications.
      </about-page-paragraph>
      <about-page-paragraph>
        Collaboration and teamwork are essential values in my approach to development. Working alongside designers, backend developers, and other stakeholders, I believe in fostering an environment where ideas are shared openly and where constructive feedback leads to the best possible outcomes.
      </about-page-paragraph>
      <about-page-paragraph>
        If you're seeking a frontend engineer with a deep passion for React and a drive to deliver outstanding user experiences, I'd be thrilled to collaborate and be a part of projects that push the boundaries of what's possible on the web. Let's join forces and create something extraordinary together!
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
