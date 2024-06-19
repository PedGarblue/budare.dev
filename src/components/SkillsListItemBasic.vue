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
import CustomIcon from './lib/CustomIcon.vue';

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

<style lang="postcss" scoped>
.skill {
  @apply flex
    flex-col
    m-4
    bg-gray-800
    bg-opacity-20
    py-1 px-2
    lg:py-2 lg:px-4 
    rounded
    shadow-md
    text-white
    border
    border-gray-900
    border-opacity-30
    text-xs
    md:text-sm
    font-bold;

  width: max-content;
  align-items: center;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
}
.skill__icon {
  @apply text-xl lg:text-3xl mb-1;
}
.skill__certificate {
  @apply md:ml-2;
  color: #d6bf4d;
}
</style>
