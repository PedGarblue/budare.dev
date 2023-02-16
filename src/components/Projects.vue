<template>
  <page-section
    name="projects"
    :title="t('title')"
    :fa-icon="['fas', 'project-diagram']"
  >
    <template #body>
      <div class="flex flex-col gap-5">
        <projects-item
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </template>

    <template #footer>
      <div class="footer">
        <a
          class="projects__button"
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
  </page-section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import projects from '@/data/projects';
import contact from '@/data/contact';
import ProjectsItem from './ProjectsItem';
import PageSection from './PageSection.vue';

export default {
  name: 'Projects',
  components: {
    ProjectsItem,
    PageSection,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      projects,
      contact,
    };
  },
};
</script>

<style lang="postcss" scoped>
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
  },
  "es": {
    "title": "Proyectos",
    "seemore": "Ver más en",
  }
}
</i18n>
