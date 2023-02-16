<template>
  <section :id="name">
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
  @apply text-lg;
}
.section-container {
  @apply divide-y-2 divide-gray-200;
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
