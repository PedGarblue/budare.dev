<template>
  <span class="flex skill">
    <custom-icon
      v-if="skill.icon"
      :icon="skill.icon"
      class="margin-right-s"
      :style="skill.style"
    />
    <span>{{ formattedTitle }}</span>
    <a
      v-if="skill.certificate"
      :href="skill.certificate"
      class="margin-left-s"
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
    formattedTitle() {
      let title = this.skill.title;
      if (this.skill.level) title = `${title} - ${this.skill.level}`;
      return title;
    },
  },
};
</script>

<style lang="scss" scoped>
.skill {
  width: max-content;
  margin: $medium;
  padding: $small $medium;
  color: $text-secondary;
  background-color: $background-terciary;
  box-shadow: 0em 0em 0.2em 0em $text-terciary;
  border-radius: $small;
}
</style>
