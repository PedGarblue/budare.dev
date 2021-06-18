<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
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
  background-color: $primary-color;
  text-align: center;
  color: $primary-font-color;
}
</style>
