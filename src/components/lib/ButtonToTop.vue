<template>
  <div id="go-to-top" @click="toTop">
    <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </div>
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
  @apply flex fixed p-4 bg-blue-700 border rounded-full text-white cursor-pointer;
  top: calc(100vh - 7rem);
  left: calc(100vw - 4rem);
}

@media (min-width: 400px) {
  #go-to-top {
    left: 90vw;
  }
}
</style>
