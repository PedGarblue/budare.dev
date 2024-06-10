<template>
  <button id="locale-switcher" @click="changeLocale">
    <custom-icon :icon="locale" />
  </button>
</template>

<script>
import { useI18n } from 'vue-i18n';
import CustomIcon from './CustomIcon.vue';

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

<style lang="scss" scoped>
#locale-switcher {
  display: flex;
  padding: 0.2rem 0.2rem;
  background-color: transparent;
  border: none;
  border-radius: 0.3rem;
  font-size: 2.5em;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
