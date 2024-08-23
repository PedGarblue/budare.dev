<template>
  <page-section
    name="projects"
    class="projects"
    :title="t('title')"
    ref="section"
  >
    <template #body>
      <div class="mb-10">
        <animated-heading headingType="h2" :text="t('animated-heading-1')" start-color="#7928CA" end-color="#FF0080"></animated-heading>
        <animated-heading
          headingType="h2"
          :text="t('animated-heading-2')"
          start-color="#007CF0"
          end-color="#00DFD8"
        ></animated-heading>
        <div class="max-w-prose border-l-2 border-gray-900 px-5 mt-4 text-gray-200 italic">
          {{ t('summary') }}
        </div>
      </div>
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
      <div class="flex w-full mb-8 mt-20">
        <a
          class="mx-auto font-bold text-sm md:text-xl"
          :href="contact.github"
          rel="noreferrer noopener"
        >
          {{ t('seemore') }}
          <span class="ml-1">
            <icon-brand-github size="28" class="inline -mt-1" />
          </span>
        </a>
      </div>
    </template>

    <template #section-bg>
      <skew-bg v-bind="animBackgroundOptions" />
    </template>
  </page-section>
</template>

<script setup>
import { defineAsyncComponent, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import projects from '@/data/projects';
import contact from '@/data/contact';
import ProjectsItem from './ProjectsItem.vue';
import PageSection from './PageSection.vue';
import ComponentCarousel from '@/components/lib/ComponentCarousel.vue';
import AnimatedHeading from '@/components/lib/AnimatedHeading.vue';
import { IconBrandGithub } from '@tabler/icons-vue';

const SkewBg = defineAsyncComponent(() => import('./SkewBg.vue'));
const section = ref(null);
const animBackgroundOptions = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
  animationDirection: 'from-tr-to-bl',
});

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const carousel = ref(null);

onMounted(() => {
  carousel.value.updateTotalItems(projects.length);
  animBackgroundOptions.width = section.value.$el.offsetWidth;
  animBackgroundOptions.height = section.value.$el.offsetHeight;
});
</script>

<style lang="postcss">
.projects .section-container {
  @apply lg:bg-opacity-50 lg:bg-gray-900 pt-2 lg:py-6 lg:px-8;
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
    "animated-heading-1": "AGILE",
    "animated-heading-2": "Engineering",
    "title": "Projects",
    "summary": "I treat my projects like products, aiming for solutions that others and myself can use. I focus on long-term projects, thoroughly exploring a framework or language carefully and extensively.",
    "seemore": "More in",
    "projects": {
      "summary": "My focus on creating a personal project is that can be useful for me and for others."
    }
  },
  "es": {
    "animated-heading-1": "AGILE",
    "animated-heading-2": "Engineering",
    "title": "Proyectos",
    "summary": "I treat my projects like products, aiming for solutions that others and myself can use. I focus on long-term projects, thoroughly exploring a framework or language carefully and extensively.",
    "seemore": "Más en",
    "projects": {
      "summary": "Aquí hay algunos de los proyectos en los que he trabajado."
    }
  }
}
</i18n>
