<template>
  <nav class="navbar">
    <div class="navbar__contents">
      <div class="navbar__items">
        <a
          v-for="(link, i) in links"
          :href="link.href"
          class="navbar__link"
          :key="i"
          :arial-label="`Move to section ${link.title}`"
        >
          <component :is="link.icon" size="26" class="md:hidden" />
          <span class="hidden md:inline">
            {{ link.title }}
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { IconHome, IconBriefcase, IconApps, IconBrandGithub, IconUser, IconMessage } from '@tabler/icons-vue';

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const links = [
  {
    title: t('link.home'),
    href: '#blurb',
    icon: IconHome,
  },
  {
    title: t('link.experience'),
    href: '#experience',
    icon: IconBriefcase,
  },
  {
    title: t('link.projects'),
    href: '#projects',
    icon: IconApps,
  },
  {
    title: t('link.knowledge'),
    href: '#skills',
    icon: IconBrandGithub,
  },
  {
    title: t('link.about'),
    href: '#about',
    icon: IconUser
  },
  {
    title: t('link.contact'),
    href: '#contact',
    icon: IconMessage,
  },
]
</script>

<style lang="postcss" scoped>
.navbar {
  @apply bg-opacity-10 font-nunito;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.1rem 0;
  z-index: 3;
}

.navbar__contents {
  @apply flex;
}

.navbar__items {
  @apply py-2 px-4 rounded-full relative flex gap-3 justify-center items-center mx-auto text-xl bg-gray-900 bg-opacity-20;
  backdrop-filter: blur(10px);
}

.navbar__link {
  @apply
    tracking-wide text-sm font-bold py-2 px-2 md:px-6 text-gray-100 rounded-full lg:text-xl bg-gray-900 bg-opacity-20;
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
      "home": "Home",
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
      "home": "Inicio",
      "about": "Acerca",
      "experience": "Experiencia",
      "projects": "Proyectos",
      "knowledge": "Habilidades",
      "contact": "Contacto"
    }
  }
}
</i18n>
