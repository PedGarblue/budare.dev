<template>
  <div
    class="flex flex-row items-center gap-2 lg:gap-4"
  >
    <div class="project__info">
      <img v-if="project.image" :src="project.image" class="project_image" alt=""/>
      <div v-else>
        <div class="project_image bg-gray-900 opacity-50 w-full lg:hidden"></div>
      </div>
      <div class="">
        <a
          :href="project.demoUrl"
          class="project__title"
          rel="noreferrer noopener"
        >
          {{ project.name }}
        </a>
        <div class="project__tags mt-auto">
          <projects-tag
            v-for="tag in project.tags"
            :key="tag.title"
            :data="tag"
          />
        </div>
        <div class="project__desc">
          {{ project.desc[locale] }}
        </div>
      </div>
    </div>
    <a
      class="project__source"
      :href="project.source"
      rel="noreferrer noopener"
    >
      <font-awesome-icon class="w-6 h-6" :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import ProjectsTag from './ProjectsTag.vue';

export default {
  name: 'ProjectsItem',
  components: { ProjectsTag },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      locale,
    };
  },
};
</script>

<style lang="postcss" scoped>

.project__info {
  @apply w-full flex flex-col gap-4 lg:flex-row;
}

.project__title {
  @apply text-xl;
  font-weight: bold;
}

.project__tags {
  @apply flex items-center gap-3;

  margin-top: 0.3rem; /* Equivalent to $extra-small-space */
}

.project_image {
  @apply rounded-3xl shadow-lg border-none h-52;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.project__source {
  @apply hidden lg:flex items-center justify-center w-10 h-10;

  margin-left: auto;
  border: 0.1rem solid hsl(0, 1%, 45%); /* Equivalent to $primary-font-color */
  border-radius: 50%;
  box-shadow: 0.01em 0.01em 0.2em hsl(0, 1%, 54%); /* Equivalent to $terciary-font-color */
  font-size: 1.3rem; /* Equivalent to 1.3em */
  font-weight: bold;
  color: hsl(0, 4%, 95%); /* Equivalent to $primary-font-color */
}

.project__source span {
  @apply hidden lg:inline;
}

@media (min-width: 1024px) {
  .project__info {
    max-width: 80%;
  }
}
</style>

<i18n>
{
  "en": {
    "source": "Source",
  },
  "es": {
    "source": "Source",
  }
}
</i18n>
