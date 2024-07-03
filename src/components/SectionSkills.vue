<template>
  <page-section
    name="skills"
    class="skills-section"
    :title="t('title')"
    ref="section"
  >
    <template #body>
      <skills-list :items="skills.misc" />
      <skills-list :items="skills.languages" />
    </template>

    <template #section-bg>
      <skew-bg v-bind="animBackgroundOptions" />
    </template>
  </page-section>
</template>

<script setup>
import { defineAsyncComponent, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import skills from '@/data/skills';
import SkillsList from './SkillsList.vue';
import PageSection from './PageSection.vue';

const SkewBg = defineAsyncComponent(() => import('./SkewBg.vue'));
const section = ref(null);
const animBackgroundOptions = reactive({
  animationDirection: 'from-tl-to-br',
  width: window.innerWidth,
  height: window.innerWidth,
})

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

onMounted(() => {
  animBackgroundOptions.width = section.value.$el.offsetWidth;
  animBackgroundOptions.height = section.value.$el.offsetHeight;
});
</script>

<style lang="postcss">
  .skills-section .section-container {
    @apply my-auto;
  }
</style>

<style lang="postcss" scoped>
.skills-section {
  @apply flex flex-col relative;
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
