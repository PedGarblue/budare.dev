<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { experiences } from '../data/experience';
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
      </div>
    </template>

    <template #section-bg>
      <parallel-grids-bg />
    </template>
  </page-section>
</template>

<style lang="postcss">
.experience-contents {
  @apply lg:bg-gray-900 lg:bg-opacity-30 lg:rounded-3xl lg:px-8 lg:py-6;

  backdrop-filter: blur(10px);
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
    }, 
    "es": {
      "title": "Experiencia Profesional",
    }
  }
  </i18n>
