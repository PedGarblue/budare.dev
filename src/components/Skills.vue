<template>
  <section id="skills">
    <div class="container">
      <h2>
        <font-awesome-icon :icon="['fas', 'code']" />
        {{ t('title') }}
      </h2>
      <hr />
      <div class="top-skills">
        <h3>{{ t('top_skills') }}</h3>
        <div class="flex">
          <skills-main-item
            v-for="skill in skills.top"
            :key="skill.id"
            :percentage="skill.percentage"
            :title="skill.title[locale]"
            :time="skill.time[locale]"
            :desc="skill.desc[locale]"
          />
        </div>
      </div>
      <skills-list :title="t('basic_skills')" :items="skills.misc" />
      <skills-list :title="t('languages')" :items="skills.languages" />
    </div>
  </section>
</template>

<script>
import SkillsMainItem from './SkillsMainItem';
import SkillsList from './SkillsList';
import skills from '@/data/skills';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Skills',
  components: {
    SkillsMainItem,
    SkillsList,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      locale,
      skills,
    };
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

<i18n>
{
  "en": {
    "title": "Skills",
    "top_skills": "Top Skills",
    "basic_skills": "Tecnologies",
    "languages": "Languages",
  },
  "es": {
    "title": "Habilidades",
    "top_skills": "Habilidades principales",
    "basic_skills": "Tecnologías",
    "languages": "Idiomas",
  },
}
</i18n>
