<template>
  <nav class="navbar">
    <div class="navbar__contents">
      <router-link to="/" class="navbar__brand brand">
        <font-awesome-icon :icon="['fas', 'code']" class="brand__icon" />
        <span class="brand__title">
          {{ aboutme.name }}
        </span>
      </router-link>
      <div class="navbar__items">
        <a href="#about" class="navbar__link">
          {{ t('link.about') }}
        </a>
        <a href="#projects" class="navbar__link">
          {{ t('link.projects') }}
        </a>
        <LocaleSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import LocaleSwitcher from '@/components/lib/LocaleSwitcher';
import aboutme from '@/data/aboutme';

export default {
  name: 'Nav',
  components: {
    LocaleSwitcher,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return { t, locale };
  },
  data() {
    return {
      aboutme,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.1rem 0;
  background-color: $secondary-color;
  z-index: 3;
  box-shadow: 0.1rem 0 0.3rem hsl(0, 0%, 24.3%);

  &__contents,
  &__items {
    @include flex;

    justify-content: space-between;
  }

  &__contents {
    @include container;
  }

  &__link {
    font-size: 0.75rem;
    font-weight: bold;
    padding: $medium-space $small-space;
    border-radius: $small-space;
    color: $primary-font-color;
  }

  &__link:hover {
    background-color: $primary-color;
  }
}
.brand {
  @include flex;

  font-size: $medium-space;
  color: $primary-font-color;

  &__icon,
  &__title {
    margin: 0 $small-space;
  }
}

@media screen and (min-width: $small-viewport) {
  .navbar {
    position: static;
    padding: $big-space 0;
    background-color: $secondary-color;

    &__link {
      color: $primary-font-color;
      font-size: 1.2rem;
      font-weight: normal;
    }

    &__link:hover {
      background-color: $primary-color;
    }
  }

  .brand {
    font-size: 1.3rem;
    color: $primary-font-color;
  }

  #locale-switcher {
    margin: 0 $small-space;
  }
}
</style>

<i18n>
{
  "en" :{
    "link": {
      "about": "About",
      "projects": "Projects"
    }
  },
  "es" :{
    "link": {
      "about": "Acerca",
      "projects": "Projectos"
    }
  }
}
</i18n>
