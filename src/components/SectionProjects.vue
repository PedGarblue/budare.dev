<template>
  <page-section name="projects" class="projects" :title="t('title')">
    <template #body>
      <div class="hidden lg:flex flex-wrap gap-y-5">
        <projects-item
          v-for="project in projects"
          :key="project.name"
          :project="project"
          :class="{
            'w-1/2 pl-5': project.type === 'minor',
            'w-full': project.type === 'major',
          }"
        />
      </div>
      <div class="lg:hidden">
        <component-carousel ref="carousel" class="w-full">
          <projects-item
            v-for="project in projects"
            :key="project.name"
            :project="project"
            class="w-full"
          />
        </component-carousel>
      </div>
      <div class="flex w-full pb-8 mt-auto">
        <a
          class="mx-auto font-bold text-sm md:text-xl"
          :href="contact.github"
          rel="noreferrer noopener"
        >
          {{ t('seemore') }}
          <span class="ml-1">
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
        </a>
      </div>
    </template>

    <template #section-bg>
      <skew-bg />
    </template>
  </page-section>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import projects from '@/data/projects';
import contact from '@/data/contact';
import ProjectsItem from './ProjectsItem.vue';
import PageSection from './PageSection.vue';
import ComponentCarousel from '@/components/lib/ComponentCarousel.vue';

const SkewBg = defineAsyncComponent(() => import('./SkewBg.vue'));

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const carousel = ref(null);

onMounted(() => {
  carousel.value.updateTotalItems(projects.length);
});
</script>

<style lang="postcss">
.projects .section-container {
  @apply lg:bg-opacity-30 lg:bg-gray-800 rounded-lg pt-2 lg:py-6 lg:px-8;
  backdrop-filter: blur(10px);
}
</style>

<style lang="postcss" scoped>
.projects {
  /* @apply pt-20; */
  position: relative;
}
.footer {
  @apply mt-8;

  text-align: center;
}
</style>

<i18n>
{
  "en": {
    "title": "Projects",
    "seemore": "See more in",
    "projects": {
      "summary": "My focus on creating a personal project is that can be useful for me and for others."
    }
  },
  "es": {
    "title": "Proyectos",
    "seemore": "Ver más en",
    "projects": {
      "summary": "Aquí hay algunos de los proyectos en los que he trabajado."
    }
  }
}
</i18n>
