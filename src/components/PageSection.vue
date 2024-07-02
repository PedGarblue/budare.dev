<template>
  <section :id="name">
    <section-title :title="title" :gradient="titleGradient"/>
    <div class="section-container">
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
import SectionTitle from './SectionTitle.vue';

export default {
  components: {
    CustomIcon,
    SectionTitle,
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
    titleGradient: {
      type: String,
      required: false,
      default: '103deg, rgb(20 7 39) 0%, rgb(106 31 63) 35%, rgb(173 51 82) 62%, rgba(75, 18, 35, 1) 100%',
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
  min-height: 100vh;
  text-align: left;
  padding-top: 0rem;
}
.section-container {
  @apply h-full px-3 md:px-0;
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
