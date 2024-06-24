<template>
  <router-view />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="postcss">
#app {
  position: relative;
  @apply text-white;
  text-align: center;
  font-family: 'Nunito', sans-serif;
}
</style>
