<template>
  <div class="flex project">
    <div class="project__info">
      <div class="text-bold">
        <a
          :href="project.demoUrl"
          class="project__title"
          rel="noreferrer noopener"
        >
          {{ project.name }}
        </a>
      </div>
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
      class="project__source text-bold"
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
import ProjectsTag from './ProjectsTag';
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

<style lang="scss" scoped>
.project {
  margin: 0.8rem 0;
  flex-wrap: nowrap;
  text-align: left;

  &__tags {
    display: flex;
    margin-top: $small;
    align-items: center;
  }
  &__source {
    margin-left: auto;
    padding: 0 0.5rem;
    border: 0.1rem solid $text-primary;
    border-radius: 50%;
    box-shadow: 0.01em 0.01em 0.2em $text-terciary;
    font-size: 1.3em;
    color: $text-primary;

    & span {
      display: none;
    }
  }

  @media screen and (min-width: $breakpoint-small) {
    &__source {
      padding: $small $medium;
      border-radius: $small;
      background-color: $background-secondary;
      font-size: $medium;

      & span {
        display: inline;
        margin-left: 0.5rem;
      }
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
