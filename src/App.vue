<template>
  <Nav />
  <router-view class="page" />
  <Footer />
</template>

<script>
import '@/assets/style.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-primary);
  text-align: center;
  color: var(--text-primary);
}
.page {
  padding-top: 3.26rem;
}
@media screen and (min-width: 400px) {
  .page {
    padding-top: 0;
  }
}
</style>
