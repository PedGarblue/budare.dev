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

<style lang="scss" scoped>
#go-to-top {
  @include flex;

  position: fixed;
  padding: $medium-space;
  background-color: $secondary-color;
  top: calc(100vh - 7rem);
  left: calc(100vw - 4rem);
  border: solid 0.14em;
  border-radius: 50%;
  color: $primary-font-color;
  cursor: pointer;
}

@media screen and (min-width: $small-viewport) {
  #go-to-top {
    left: 90vw;
  }
}
</style>
