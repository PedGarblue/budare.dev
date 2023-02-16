<template>
  <page-section name="skills" :title="t('title')" :fa-icon="['fas', 'code']">
    <template #body>
      <skills-list
        :title="t('top_skills')"
        :items="skills.top"
        item-type="card"
      />
      <skills-list :title="t('basic_skills')" :items="skills.misc" />
      <skills-list :title="t('languages')" :items="skills.languages" />
    </template>
  </page-section>
</template>

<script>
import SkillsList from './SkillsList';
import skills from '@/data/skills';
import { useI18n } from 'vue-i18n';
import PageSection from './PageSection.vue';

export default {
  name: 'Skills',
  components: {
    SkillsList,
    PageSection,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      skills,
    };
  },
};
</script>

<i18n>
{
  "en": {
    "title": "Skills",
    "top_skills": "Main Skills",
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
