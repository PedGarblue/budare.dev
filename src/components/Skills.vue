<template>
  <section id="skills">
    <div class="container">
      <h2>
        <font-awesome-icon :icon="['fas', 'code']" />
        {{ $t('skills.title') }}
      </h2>
      <hr />
      <div class="top-skills">
        <h3>{{ $t('skills.top_skills') }}</h3>
        <div class="flex">
          <skills-main-item
            v-for="skill in skills.top"
            :key="skill.id"
            :percentage="skill.percentage"
            :title="skill.title[$i18n.locale]"
            :time="skill.time[$i18n.locale]"
            :desc="skill.desc[$i18n.locale]"
          />
        </div>
      </div>
      <skills-list :title="$t('skills.basic_skills')" :items="skills.misc" />
      <skills-list :title="$t('skills.languages')" :items="skills.languages" />
    </div>
  </section>
</template>

<script>
import SkillsMainItem from './SkillsMainItem';
import SkillsList from './SkillsList';
import skills from '@/data/skills';

export default {
  name: 'Skills',
  components: {
    SkillsMainItem,
    SkillsList,
  },
  computed: {
    skills() {
      return skills;
    },
  },
};
</script>

<style scoped>
.top-skills {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
  justify-content: center;
}
.misc-skills {
  margin-top: 6em;
}
</style>
