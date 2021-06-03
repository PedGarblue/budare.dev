<template>
  <div class="skillsList">
    <h3 v-if="title">{{ title }}</h3>
    <div v-for="skillset in items" :key="skillset.id" class="flex skillset">
      <div class="skillset__name">{{ skillset.name }}</div>
      <skills-list-item
        v-for="skill in skillset.skills"
        :key="skill.title"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
import SkillsListItem from './SkillsListItem';

export default {
  name: 'SkillsList',
  components: {
    SkillsListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>

<style scoped>
.skillsList {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
  justify-content: center;
}
.skillset {
  justify-content: center;
}
.skillset__name {
  flex-basis: 100%;
  font-weight: lighter;
  color: var(--text-terciary);
}
</style>
