<template>
  <nav class="navbar">
    <div class="container">
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
  background-color: $background-secondary;
  z-index: 3;
  box-shadow: 0.1rem 0 0.3rem hsl(0, 0%, 24.3%);

  &__contents,
  &__items {
    @include flex;

    justify-content: space-between;
  }

  &__link {
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.75rem 0.5rem;
    border-radius: $small;
    color: $text-primary;
  }

  &__link:hover {
    background-color: $background-primary;
  }
}
.brand {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  color: $text-primary;

  &__icon,
  &__title {
    margin: 0 0.25rem;
  }
}

@media screen and (min-width: 400px) {
  .navbar {
    padding: $big 0;
    position: static;
    background-color: $background-secondary;

    &__link {
      color: $text-primary;
      font-size: 1.2rem;
      font-weight: normal;
    }

    &__link:hover {
      background-color: $background-primary;
    }
  }

  .brand {
    font-size: 1.3rem;
    color: $text-primary;
  }

  #locale-switcher {
    margin: 0 0.5rem;
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
