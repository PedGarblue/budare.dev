<template>
  <Nav />
  <router-view class="page" />
  <Footer />
</template>

<script>
import "@/assets/style.css";
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
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
