<template>
  <section id="about">
    <div class="container">
      <common-section-title>
        About Me
      </common-section-title>
      <div class="content_box">
        <article class="article">
          <p class="paragraph">
            Hello! I'm <span class="highlight" style="color: rgb(80, 255, 179);"> Oluwasanmi Awelewa </span>, call me <span class="highlight" style="color: rgb(255, 220, 80);"> NiCode </span> if you please. I am a Software Engineer with frontend development as my core craft.
          </p>
          <p class="paragraph">
            Unlike many web engineers who focus on frontend or backend only, I take it upon myself to explore different ideas, tools, and technologies, even when they push me out of my comfort zone. This open-minded approach has let me grow into new environments and ship complete, end-to-end products.
          </p>
          <p class="paragraph">
            Over the past five years, I've used software engineering as a means to sharpen my problem-solving abilities and build things that matter. More recently, I've been expanding into AI engineering, and I'm excited about the chance to make an impact in this new world.
          </p>
          <router-link to="/contact">
            <button class="action">
              <app-icon icon="work" />
              <span class="label">
                Get in touch
              </span>
            </button>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../../common/AppIcon.vue'
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'

export default defineComponent({
  components: { CommonSectionTitle, AppIcon },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/home/about.scss';
</style>

