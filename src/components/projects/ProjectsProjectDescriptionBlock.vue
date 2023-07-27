<template>
  <section class="description-block">
    <h6 class="block-title">
      {{ title }}
    </h6>
    <p class="block-content">
      <slot />
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.description-block {
  max-width: 800px;
  margin-top: 40px;
  .block-title {
    font-weight: 500;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-bottom: 8px;
    color: globals.$titleGray;
  }
  .block-content {
    color: globals.$desaturated-yellow;
    font-size: 0.9em;
    line-height: 2em;
    letter-spacing: 0.01em;
  }
}
</style>
