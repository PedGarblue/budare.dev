<template>
  <section :id="name" class="h-screen">
    <div class="section-container">
      <h2 class="tracking-wider">
        <font-awesome-icon :icon="faIcon" class="mr-1" />
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
export default {
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
      default() {
        return [];
      },
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
  text-align: left;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.section-container {
  @apply divide-y-2 divide-gray-200 h-full;
}
.section-body {
  margin-top: theme('spacing.2');
  padding: theme('spacing.4') 0;
  color: white;
}
</style>

<style lang="scss">
.section-container {
  @include container;
}
.section-footer {
  @include container;
}
</style>
