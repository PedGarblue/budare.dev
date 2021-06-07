<template>
  <div id="locale-switcher">
    <button class="flex" @click="changeLocale">
      <custom-icon :icon="locale" />
    </button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import CustomIcon from './CustomIcon';

export default {
  name: 'LocaleSwitcher',
  components: {
    CustomIcon,
  },
  setup() {
    const { locale } = useI18n({
      inheritLocale: true,
      useScope: 'global',
    });

    return { locale };
  },
  data() {
    return {
      langs: ['es', 'en'],
    };
  },
  methods: {
    changeLocale() {
      const inverses = {
        es: 'en',
        en: 'es',
      };
      this.locale = inverses[this.locale];
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.2rem 0.2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0.3rem;
}
button:hover {
  background-color: var(--light-background);
}
.icon {
  font-size: 2.5em;
  border-radius: 0.2rem;
}
</style>
