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
    <a class="project__source" :href="project.source" rel="noreferrer noopener">
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
  @include flex(row, nowrap);

  text-align: left;

  &__title {
    font-weight: bold;
  }

  &__tags {
    @include flex;

    margin-top: $extra-small-space;
    align-items: center;
  }

  &__source {
    margin-left: auto;
    padding: 0 $small-space;
    border: 0.1rem solid $primary-font-color;
    border-radius: 50%;
    box-shadow: 0.01em 0.01em 0.2em $terciary-font-color;
    font-size: 1.3em;
    font-weight: bold;
    color: $primary-font-color;

    & span {
      display: none;
    }
  }

  @media screen and (min-width: $small-viewport) {
    &__source {
      padding: $extra-small-space $medium;
      border-radius: $extra-small-space;
      font-size: $medium-font-size;

      & span {
        display: inline;
        margin-left: $small-space;
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
