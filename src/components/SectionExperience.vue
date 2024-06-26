<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { experiences } from '../data/experience';
import contact from '@/data/contact';
import ExperienceItem from './ExperienceItem.vue';
import PageSection from './PageSection.vue';
import ComponentCarousel from '@/components/lib/ComponentCarousel.vue';

const ParallelGridsBg = defineAsyncComponent(() =>
  import('./ParallelGridsBg.vue')
);

const carousel = ref(null);

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});


onMounted(() => {
  carousel.value.updateTotalItems(experiences.length)
})
</script>

<template>
  <page-section
    name="experience"
    :title="t('title')"
    class="about relative"
  >
    <template #body>
      <div class="experience-contents">
        <div class="hidden lg:flex flex-col gap-4 lg:gap-8">
          <ExperienceItem
            v-for="experience in experiences"
            :key="experience.title"
            :experience="experience"
          ></ExperienceItem>
        </div>
        <div class="lg:hidden">
          <ComponentCarousel ref="carousel" class="w-full">
            <ExperienceItem
              v-for="experience in experiences"
              :key="experience.title"
              :experience="experience"
            />
          </ComponentCarousel>
        </div>
        <div class="w-full flex flex-col mt-auto justify-center text-center">
          <div>
            <a
              class="mx-auto font-semibold text-sm xl:text-base 2xl:text-xl"
              :href="contact.resume"
              rel="noreferrer noopener"
              target="_blank"
            >
              {{ t('download_cv') }}
              <font-awesome-icon :icon="['far', 'file-pdf']" />
            </a>
          </div>
          <div>
            <p>{{ t('or') }}</p>
          </div>
          <div>
            <a
              class="mx-auto font-semibold text-sm xl:text-base 2xl:text-xl"
              :href="contact.linkedin"
              rel="noreferrer noopener"
              target="_blank"
            >
              {{ t('contact_me_at_linkedin') }}
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>

    </template>

    <template #section-bg>
      <parallel-grids-bg />
    </template>
  </page-section>
</template>

<style lang="postcss">
.experience-contents {
  @apply flex flex-col h-full lg:bg-opacity-30 lg:rounded-3xl lg:px-8 lg:py-6;
}
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
      "download_cv": "Download CV",
      "contact_me_at_linkedin": "Contact me at ",
      "or": "Or"
    }, 
    "es": {
      "title": "Experiencia Profesional",
      "download_cv": "Descargar CV",
      "contact_me_at_linkedin": "Contáctame en",
      "or": "O"
    }
  }
  </i18n>
