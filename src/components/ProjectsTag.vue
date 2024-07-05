<template>
  <span class="tag">
    <img
      v-if="data.image"
      class="tag__image"
      :src="data.image"
      :style="data.style"
    />
    <custom-icon
      v-else-if="isCustomIcon"
      class="tag__icon"
      :icon="data.icon"
      :style="data.style"
    />
    <component v-else :is="data.icon" class="tag__icon" :style="data.style" />
    <span class="tag__title">{{ data.title }}</span>
  </span>
</template>

<script setup>
import CustomIcon from './lib/CustomIcon.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const isCustomIcon = Array.isArray(props.data.icon) || typeof props.data.icon === 'string';
</script>

<style lang="postcss" scoped>
.tag {
  @apply flex items-center text-gray-300;
  flex-direction: row;
  border-radius: 0.3rem; /* Equivalent to $extra-small-space */
  font-size: 0.85rem; /* Equivalent to $small-font-size */
  font-weight: 700;
  cursor: default;
  transition: all 0.1s ease-in;
}

.tag:hover {
  border-color: #f2f2f2; /* Equivalent to $terciary-color */
}

.tag__icon {
  @apply mr-1 h-5;
  font-size: 1.1em;
}

.tag__title {
  @apply text-xs font-semibold lg:font-bold lg:text-sm;

}
</style>
