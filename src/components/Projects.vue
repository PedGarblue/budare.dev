<template>
  <section id="projects">
    <div class="container">
      <h2 class="projects__title">
        <font-awesome-icon :icon="['fas', 'project-diagram']" />
        {{ t('title') }}
      </h2>
      <hr />
      <div class="projects__list">
        <projects-item
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
      <div class="text-center margin-l-top">
        <a class="button" :href="contact.github" rel="noreferrer noopener">
          {{ t('seemore') }}
          <span class="text-medium">
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import projects from '@/data/projects';
import contact from '@/data/contact';
import ProjectsItem from './ProjectsItem';

export default {
  name: 'Projects',
  components: {
    ProjectsItem,
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

<style scoped></style>

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
