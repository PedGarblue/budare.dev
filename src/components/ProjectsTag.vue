<template>
  <span class="tag">
    <img
      v-if="data.image"
      class="tag__image"
      :src="data.image"
      :style="data.style"
    />
    <custom-icon
      v-if="data.icon"
      class="tag__icon"
      :icon="data.icon"
      :style="data.style"
    />
    <span class="tag__title">{{ data.title }}</span>
  </span>
</template>

<script>
import CustomIcon from './lib/CustomIcon.vue';

export default {
  name: 'ProjectsTag',
  components: {
    CustomIcon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.tag {
  @apply flex items-center;
  flex-direction: row;
  border-radius: 0.3rem; /* Equivalent to $extra-small-space */
  font-size: 0.85rem; /* Equivalent to $small-font-size */
  font-weight: 500;
  cursor: default;
  transition: all 0.1s ease-in;
}

.tag:hover {
  border-color: #f2f2f2; /* Equivalent to $terciary-color */
}

.tag__icon {
  margin-right: 0.3rem; /* Equivalent to $extra-small-space */
  font-size: 1.1em;
}

.tag__title {
  @apply font-semibold lg:font-normal;
}
</style>
