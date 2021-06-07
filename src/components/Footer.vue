<template>
  <footer class="flex-column">
    <section class="flex-column container">
      <nav class="flex text-big">
        <a
          class="contact-icon"
          :href="contact.github"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          class="contact-icon"
          :href="contact.linkedin"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          class="contact-icon"
          :href="contact.telegram"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
      </nav>
    </section>
    <button-to-top />
    <div class="created-by text-small">
      {{ t('created_by') }}
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import contact from '@/data/contact';
import ButtonToTop from './lib/ButtonToTop';

export default {
  name: 'Footer',
  components: {
    ButtonToTop,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      locale,
      contact,
    };
  },
};
</script>

<style scoped>
nav a {
  margin: 0 0.3rem;
}
footer section {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.created-by {
  width: 100%;
  background-color: var(--background-secondary);
  color: var(--text-primary);
}
</style>

<i18n>
{
  "en": {
    "created_by": "Created ❤️ by Pedro García.",
  },
  "es": {
    "created_by": "Creado ❤️ por Pedro García.",
  }
}
</i18n>
