<template>
  <section :id="name">
    <div class="section-container">
      <h2 v-if="title" class="tracking-wider text-center">
        <font-awesome-icon v-if="faIcon" :icon="faIcon" class="mr-1" />
        <custom-icon v-else-if="icon" :icon="icon" class="mr-1" />
        {{ title }}
      </h2>
      <div class="section-body">
        <slot name="body"></slot>
      </div>
    </div>
    <div class="section-footer">
      <slot name="footer"></slot>
    </div>
    <slot name="section-bg"></slot>
  </section>
</template>

<script>
import CustomIcon from './lib/CustomIcon.vue'

export default {
  components: {
    CustomIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    faIcon: {
      type: Array,
      required: false,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-2xl;
  font-family: 'Montserrat Alternates', sans-serif;
}
section {
  @apply px-3 md:px-0;
  height: calc(100vh);
  text-align: left;
  padding-top: 4rem;
  padding-bottom: 4rem;

  scroll-margin-top: 0;
}
.section-container {
  @apply h-full;
}
.section-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: theme('spacing.2');
  padding: theme('spacing.4') 0;
  color: white;
}
</style>

<style lang="scss">
.section-container {
  max-width: 1000px;
  margin: 0 auto;
}
.section-footer {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
