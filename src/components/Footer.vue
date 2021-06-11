<template>
  <footer class="flex-column">
    <section class="flex-column container">
      <nav class="flex text-l">
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
    <div class="created-by">
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

<style lang="scss" scoped>
nav a {
  margin: 0 $medium;
  font-size: $medium * 1.5;
}
footer section {
  margin-top: $big;
  margin-bottom: $big;
}
.created-by {
  width: 100%;
  background-color: $background-secondary;
  font-size: $medium;
  color: $text-primary;
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
