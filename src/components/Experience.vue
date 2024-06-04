<script setup>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ExperienceItem from './ExperienceItem.vue';
import PageSection from './PageSection.vue';

const ParallelGridsBg = defineAsyncComponent(() =>
  import('./ParallelGridsBg.vue')
);

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const experiences = [
  {
    image: require('../assets/img/valocator1.png'),
    employer: 'VALocator',
    title: 'Fullstack Developer',
    description: `I played a key role in the collaborative development of a
Recruiter Management App. This system signicantly
streamlined and shortened the recruitment process of Virtual
Assistants to less than 3 days. Developed in PHP 8, Laravel 9,
Vue 3 and successfully deployed the system live on Hostinger
Ubuntu Virtual Private Server.`,
    from: 'March 2023',
    to: 'May 2024',
    tags: [
      {
        icon: ['fab', 'vuejs'],
        title: 'VueJS',
        style: {
          color: '#7ebb12',
        },
      },
      {
        icon: 'tailwind',
        title: 'TailwindCSS',
      },
      {
        icon: 'bootstrap',
        title: 'Bootstrap',
      },
      {
        icon: 'laravel',
        title: 'Laravel',
      },
      {
        icon: 'mysql',
        title: 'MySQL',
      },
    ],
  },
  {
    image: require('../assets/img/igx1.png'),
    employer: 'Innovative Gx Health',
    title: 'Fullstack Developer',
    description: [
      `Developed a Client Portal for Pharmacological Sample
      Results using PHP8 Laravel 9, Vue 3, InertiaJS, and
      TailwindCSS. Successfully deployed live on an Ubuntu VPS
      using a third-party hosting provider`,
      `Implemented and maintained a Sales Reporting App using
      Vue 3 and Bootstrap 4 on the frontend and Laravel 9 on the
      backend, with MySQL as RDMBS. Successfully deployed it
      live on an Ubuntu VPS.`,
      `Provided support on numerous projects for optimization and
      debugging, using languages such as Javascript, PHP and
      Python.`,
    ],
    from: 'July 2021',
    to: 'March 2023',
    tags: [
      {
        icon: ['fab', 'vuejs'],
        title: 'VueJS',
        style: {
          color: '#7ebb12',
        },
      },
      {
        icon: 'tailwind',
        title: 'TailwindCSS',
      },
      {
        icon: 'bootstrap',
        title: 'Bootstrap',
      },
      {
        icon: 'laravel',
        title: 'Laravel',
      },
      {
        icon: 'mysql',
        title: 'MySQL',
      },
    ],
  },
];
</script>

<template>
  <page-section
    name="Work Experience"
    :title="t('title')"
    class="about relative"
  >
    <template #body>
      <div class="flex flex-col gap-8">
        <ExperienceItem
          v-for="experience in experiences"
          :key="experience.title"
          :experience="experience"
        ></ExperienceItem>
      </div>
    </template>

    <template #section-bg>
      <parallel-grids-bg />
    </template>
  </page-section>
</template>

<style lang="postcss">
.about {
}

.about__paragraph {
  @apply text-lg;
  line-break: normal;
  white-space: pre-line;
}
</style>

<i18n>
  {
    "en": {
      "title": "Professional Experience",
    }, 
    "es": {
      "title": "Experiencia Profesional",
    }
  }
  </i18n>
