<template>
  <div class="project">
    <div class="project__info">
      <a
        :href="project.demoUrl"
        class="project__title"
        rel="noreferrer noopener"
      >
        {{ project.name }}
      </a>
      <div class="project__desc">
        {{ project.desc[locale] }}
      </div>
      <div class="project__tags">
        <projects-tag
          v-for="tag in project.tags"
          :key="tag.title"
          :data="tag"
        />
      </div>
    </div>
    <a
      class="
        project__source
        w-10 h-10 lg:w-auto lg:h-auto
        flex items-center justify-center
      "
      :href="project.source"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
      <span>
        {{ t('source') }}
      </span>
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
.project {
  @apply flex items-start;

  text-align: left;
}

.project__info {
  max-width: 80%;
}

.project__title {
  font-weight: bold;
}

.project__tags {
  @apply flex items-center gap-1;

  margin-top: 0.3rem; /* Equivalent to $extra-small-space */
}

.project__source {
  margin-left: auto;
  border: 0.1rem solid hsl(0, 4%, 95%); /* Equivalent to $primary-font-color */
  border-radius: 50%;
  box-shadow: 0.01em 0.01em 0.2em hsl(0, 1%, 54%); /* Equivalent to $terciary-font-color */
  font-size: 1.3rem; /* Equivalent to 1.3em */
  font-weight: bold;
  color: hsl(0, 4%, 95%); /* Equivalent to $primary-font-color */
}

.project__source span {
  display: none;
}

@media (min-width: 400px) { /* Equivalent to $small-viewport */
  .project__source {
    padding: 0.3rem 1rem; /* Equivalent to $extra-small-space $medium */
    border: none;
    border-radius: 3rem;
    font-size: 1rem; /* Equivalent to $medium-font-size */

    span {
      display: inline;
      margin-left: 0.5rem; /* Equivalent to $small-space */
    }
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
