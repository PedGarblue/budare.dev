<template>
  <span class="skill flex">
    <custom-icon
      v-if="skill.icon"
      :icon="skill.icon"
      class="text-medium margin-s-right"
      :style="skill.style"
    />
    <span>{{ formattedTitle }}</span>
    <a
      v-if="skill.certificate"
      :href="skill.certificate"
      class="margin-s-left"
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

<style scoped>
.skill {
  width: max-content;
  margin: 1em;
  padding: 0.3em 0.8em;
  color: var(--text-secondary);
  background-color: var(--background-terciary);
  box-shadow: 0em 0em 0.2em 0em var(--text-terciary);
  border-radius: 0.3em;
}
</style>
