<template>
  <nav class="navbar">
    <div class="navbar__contents">
      <!-- <router-link to="/" class="navbar__brand brand">
        <font-awesome-icon :icon="['fas', 'code']" class="brand__icon" />
        <span class="brand__title">
          {{ t('name') }}
        </span>
      </router-link> -->
      <div class="navbar__items">
        <a href="#experience" class="navbar__link">
          {{ t('link.experience') }}
        </a>
        <a href="#skills" class="navbar__link">
          {{ t('link.knowledge') }}
        </a>
        <a href="#contact" class="navbar__link">
          {{ t('link.contact') }}
        </a>
      </div>
      <div class="absolute right-0 ml-auto">
        <LocaleSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import LocaleSwitcher from '@/components/lib/LocaleSwitcher.vue';
import aboutme from '@/data/aboutme';

export default {
  name: 'MainNav',
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

<style lang="postcss" scoped>
.navbar {
  @apply bg-opacity-10;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0.1rem 0;
  z-index: 3;
  font-family: 'Montserrat Alternates', sans-serif;
}

.navbar__contents {
  @apply flex;
}

.navbar__items {
  @apply relative flex gap-3 justify-center items-center mx-auto text-xl;
}

.navbar__link {
  @apply
    tracking-widest text-sm font-bold py-2 px-4 text-gray-100 rounded lg:text-xl;
}

.brand {
  @apply flex text-base text-gray-100;
}

.brand__icon, .brand__title {
  @apply my-0 mx-2;
}

@media (min-width: 400px) {
  .navbar__link {
    @apply font-normal;
    color: hsl(0,4%,95%);
  }

  .navbar__link:hover {
    @apply bg-gray-800 bg-opacity-30;
    backdrop-filter: blur(5px);
  }

  .brand {
    color: hsl(0,4%,95%);
    font-size: 1.3rem;
  }

  #locale-switcher {
    margin: 0 0.5rem; /* Equivalent of $small-space */
  }
}
</style>

<i18n>
{
  "en" :{
    "name": "Pedro García",
    "link": {
      "about": "About",
      "experience": "Experience",
      "projects": "Projects",
      "knowledge": "Skills",
      "contact": "Contact"
    }
  },
  "es" :{
    "name": "Pedro García",
    "link": {
      "about": "Acerca",
      "experience": "Experiencia",
      "projects": "Proyectos",
      "knowledge": "Habilidades",
      "contact": "Contacto"
    }
  }
}
</i18n>
