<template>
  <page-section
    name="skills"
    class="skills-section"
    :title="t('title')"
  >
    <template #body>
      <skills-list :items="skills.misc" />
      <skills-list :items="skills.languages" />
    </template>

    <template #section-bg>
      <skew-bg animation-direction="from-tl-to-br" />
    </template>
  </page-section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import skills from '@/data/skills';
import SkillsList from './SkillsList.vue';
import PageSection from './PageSection.vue';

const SkewBg = defineAsyncComponent(() => import('./SkewBg.vue'));

export default {
  name: 'SectionSkills',
  components: {
    SkillsList,
    PageSection,
    SkewBg,
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

<style lang="postcss">
.skills-section {
  @apply relative;
}
</style>

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
