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
    <div class="designed-by-me text-small">
      {{ $t('footer.designed_by') }}
    </div>
  </footer>
</template>

<script>
import contact from '@/data/contact';
import ButtonToTop from './lib/ButtonToTop';

export default {
  name: 'Footer',
  components: {
    ButtonToTop,
  },
  data() {
    return {
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
.designed-by-me {
  width: 100%;
  background-color: var(--background-secondary);
  color: var(--text-primary);
}
</style>
