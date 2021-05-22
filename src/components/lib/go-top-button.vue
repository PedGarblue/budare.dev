<template>
  <div id="go-to-top" @click="toTop">
    <span class="flex">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </span>
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

<style scoped>
#go-to-top {
  position: fixed;
  background-color: var(--background-secondary);
  top: calc(100vh - 7rem);
  left: calc(100vw - 4rem);
  border: solid 0.14em;
  padding: 1rem;
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
}

@media screen and (min-width: 400px) {
  #go-to-top {
    left: 90vw;
  }
}
</style>
