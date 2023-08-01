<template>
  <page-section name="about" :title="t('title')" class="about relative">
    <template #body>
      <p class="about__paragraph">
        {{ t('desc') }}
      </p>
    </template>

    <template #section-bg>
      <parallel-grids-bg />
    </template>
  </page-section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';
import PageSection from './PageSection.vue';
import ParallelGridsBg from './ParallelGridsBg.vue';

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
.about {
  padding-top: 21vh !important;
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
    "title": "About me",
    "desc": "I'm proficient with Vue Framework and it's environment (Nuxt, Pinia, Vuex, etc.), i love styling using pure CSS but i often use TailwindCSS or SCSS/SASS to make everything scalable. \nFor Backend Development i'm seasoned with Laravel Framework by creating API's REST, Business Logic for Fullstack projects and deploying those applications to the World with providers like DigitalOcean and GoDaddy. \nI love learn new things, solve tricky and complex challenges and make myself and others grow 🔥",
  },
  "es": {
    "title": "Acerca de mí",
    "desc": "A los 14 años hice mi primer script en Visual Basic, desde ese entonces he probado distintos lenguajes de programación en busca de hacer cosas nuevas e interesantes, eventualmente hacer código se convirtió en uno de mis hobbies favoritos.\nHe explorado por mi propia cuenta el universo del desarrollo de software, terminé enfocandome principalmente en el desarrollo web.",
  }
}
</i18n>
