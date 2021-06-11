<template>
  <Nav />
  <router-view class="page" />
  <Footer />
</template>

<script>
import '@/assets/style.scss';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background-primary;
  text-align: center;
  color: $text-primary;
}
.page {
  padding-top: 3.26rem;
}
@media screen and (min-width: $breakpoint-small) {
  .page {
    padding-top: 0;
  }
}
</style>
