<template>
  <span class="skill">
    <custom-icon
      v-if="skill.icon"
      :icon="skill.icon"
      :style="skill.style"
      class="skill__icon"
    />
    <span class="skill__title">{{ title }}</span>
    <a
      v-if="skill.certificate"
      :href="skill.certificate"
      class="skill__certificate"
      rel="noopener noreferrer"
    >
      <custom-icon :icon="['fas', 'certificate']" />
    </a>
  </span>
</template>

<script>
import CustomIcon from './lib/CustomIcon';

export default {
  name: 'SkillsListItem',
  components: {
    CustomIcon,
  },
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      let title = this.skill.title;
      if (this.skill.level) title = `${title} - ${this.skill.level}`;
      return title;
    },
  },
};
</script>

<style lang="scss" scoped>
.skill {
  @include flex;

  width: max-content;
  margin: $medium-space;
  padding: $small-space $medium-space;
  color: $secondary-font-color;
  background-color: $terciary-color;
  box-shadow: 0em 0em 0.2em 0em $terciary-font-color;
  border-radius: $extra-small-space;

  &__icon {
    margin-right: $extra-small-space;
  }

  &__certificate {
    margin-left: $extra-small-space;
    color: hsl(50, 63, 57);
  }
}
</style>
