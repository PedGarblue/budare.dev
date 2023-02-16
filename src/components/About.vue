<template>
  <page-section name="about" :title="t('title')" :fa-icon="['far', 'user']">
    <template #body>
      <p class="about__paragraph">
        {{ t('desc') }}
      </p>
    </template>
  </page-section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';
import PageSection from './PageSection.vue';

export default {
  name: 'ShortAboutme',
  components: {
    PageSection,
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
.about__paragraph {
  line-break: normal;
  white-space: pre-line;
}
</style>

<i18n>
{
  "en": {
    "title": "About me",
    "desc": "At the age of 14 I made my first script in Visual Basic, since then I have tried different programming languages in search of doing new and interesting things, eventually making code became one of my favorite hobbies.\nI have explored the software development universe on my own, ended up focusing primarily on web development.",
  },
  "es": {
    "title": "Acerca de mí",
    "desc": "A los 14 años hice mi primer script en Visual Basic, desde ese entonces he probado distintos lenguajes de programación en busca de hacer cosas nuevas e interesantes, eventualmente hacer código se convirtió en uno de mis hobbies favoritos.\nHe explorado por mi propia cuenta el universo del desarrollo de software, terminé enfocandome principalmente en el desarrollo web.",
  }
}
</i18n>
