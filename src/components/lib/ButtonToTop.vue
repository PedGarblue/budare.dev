<template>
  <button id="go-to-top" @click="toTop">
    <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </button>
</template>

<script>
export default {
  name: 'GoToTopButton',
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="postcss" scoped>
#go-to-top {
  @apply flex fixed w-12 h-12 p-4 bg-gray-900 bg-opacity-40 border rounded-full text-white cursor-pointer;
  top: calc(100vh - 7rem);
  left: calc(100vw - 4rem);
}

@media (min-width: 1024px) {
  #go-to-top {
    left: 90vw;
  }
}
</style>
