<template>
  <Nav />
  <router-view />
</template>

<script>
import "@/assets/style.css";
import Nav from "@/components/nav.vue";

export default {
  components: {
    Nav
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
