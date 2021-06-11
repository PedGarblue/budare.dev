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
import CustomIcon from './lib/CustomIcon';

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

<style lang="scss" scoped>
.tag {
  @include flex;

  margin-right: $small;
  padding: 0 $small;
  border: 0.1rem solid $text-terciary;
  border-radius: $small;
  font-size: 0.8em;
  cursor: default;
  transition: all 0.1s ease-in;

  &:hover {
    border-color: $background-terciary;
  }
  &__icon {
    margin-right: 0.2rem;
    font-size: 1.2em;
  }
}
</style>
