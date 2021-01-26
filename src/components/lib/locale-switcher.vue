<template>
  <div id="locale-switcher">
    <button class="flex" @click="changeLocale">
      <img :src="flags[$i18n.locale]" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  data() {
    return {
      langs: ['es', 'en'],
      flags: {
        es: 'https://img.icons8.com/plasticine/100/000000/spain.png',
        en: 'https://img.icons8.com/plasticine/100/000000/usa.png',
      },
    };
  },
  methods: {
    changeLocale() {
      const inverses = {
        es: 'en',
        en: 'es',
      };
      this.$i18n.locale = inverses[this.$i18n.locale];
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0.3rem;
}
button:hover {
  background-color: var(--light-background);
}
img {
  width: 2rem;
  height: 2rem;
}
@media screen and (min-width: 400px) {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
