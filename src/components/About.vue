<template>
  <page-section name="about" :title="t('title')" class="about relative">
    <template #body>
      <p class="about__paragraph">
        {{ t('desc') }}
      </p>
      <p class="about__paragraph">
        {{ t('education') }}
      </p>
    </template>

    <template #section-bg>
      <parallel-grids-bg />
    </template>
  </page-section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';
import PageSection from './PageSection.vue';

const ParallelGridsBg = defineAsyncComponent(() =>
  import('./ParallelGridsBg.vue')
);

export default {
  name: 'About',
  components: {
    PageSection,
    ParallelGridsBg,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      aboutme,
      contact,
    };
  },
};
</script>

<style lang="postcss">
.about {}

.about__paragraph {
  @apply text-lg;
  line-break: normal;
  white-space: pre-line;
}
</style>

<i18n>
{
  "en": {
    "title": "About me",
    "desc": "I am a web developer with a 3-year career track, primarily on Fullstack development, but with a main inclination towards Front. I consider myself an organized and methodical person, oriented towards achievement and long-term objectives. My self-taught approach has allowed me to acquire diverse skills and adapt efficiently to new challenges.",
    "education": "When I graduated as a Computer Science Technician, i had limited opportunities to enter University. I made the decision to study Software Development in a self-taught manner, making use of books, software documentation, online educational platforms, and of course, a lot of focus, discipline and practice with personal projects." 
  }, 
  "es": {
    "title": "Acerca de mí",
    "desc": "A los 14 años hice mi primer script en Visual Basic, desde ese entonces he probado distintos lenguajes de programación en busca de hacer cosas nuevas e interesantes, eventualmente hacer código se convirtió en uno de mis hobbies favoritos.\nHe explorado por mi propia cuenta el universo del desarrollo de software, terminé enfocandome principalmente en el desarrollo web.",
  }
}
</i18n>
