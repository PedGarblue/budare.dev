<template>
  <nav class="navbar">
    <div class="container">
      <div class="flex">
        <div>
          <router-link to="/" class="brand">
            <font-awesome-icon :icon="['fas', 'code']" class="brand__icon" />
            <span class="brand__title">
              {{ aboutme.name }}
            </span>
          </router-link>
        </div>
        <div class="flex">
          <a href="#about" class="navbar__link">
            {{ $t('navbar.link.About') }}
          </a>
          <a href="#projects" class="navbar__link">
            {{ $t('navbar.link.Projects') }}
          </a>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from '@/components/lib/locale-switcher.vue';
import aboutme from '@/data/aboutme';

export default {
  name: 'Nav',
  components: {
    LocaleSwitcher,
  },
  data() {
    return {
      aboutme,
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--background-secondary);
  width: 100%;
  z-index: 3;
  padding: 0.1rem 0;
}
.flex {
  justify-content: space-between;
}
.navbar__link {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.75rem 0.5rem;
  border-radius: 0.35rem;
  color: var(--text-primary);
}
.navbar__link:hover {
  background-color: var(--text-terciary);
}
.brand {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  color: var(--text-primary);
}
.brand__icon,
.brand__title {
  margin: 0 0.25rem;
}

@media screen and (min-width: 400px) {
  .navbar {
    padding: 2rem 0;
    position: static;
    background-color: var(--background-secondary);
  }
  .brand {
    font-size: 1.3rem;
    color: var(--text-primary);
  }
  .navbar__link {
    color: var(--text-primary);
    font-size: 1.2rem;
    font-weight: normal;
  }
  .navbar__link:hover {
    background-color: var(--background-primary);
  }
  #locale-switcher {
    margin: 0 0.5rem;
  }
}
</style>
