<template>
  <section id="skills">
    <div class="container">
      <h2>
        <font-awesome-icon :icon="['fas', 'code']" />
        {{ t('title') }}
      </h2>
      <hr />
      <skills-list
        :title="t('top_skills')"
        :items="skills.top"
        item-type="card"
      />
      <skills-list :title="t('basic_skills')" :items="skills.misc" />
      <skills-list :title="t('languages')" :items="skills.languages" />
    </div>
  </section>
</template>

<script>
import SkillsList from './SkillsList';
import skills from '@/data/skills';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Skills',
  components: {
    SkillsList,
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

<style lang="scss" scoped></style>

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
