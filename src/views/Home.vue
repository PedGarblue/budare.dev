<template>
  <div class="home">
    <Blurb />
    <Nav />
    <div class="bg-gradient-to-b from-blue-900 to-gray-900">
      <About />
      <Projects />
      <Skills />
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Blurb from '@/components/Blurb';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default {
  name: 'Home',
  components: {
    Blurb,
    Nav,
    About,
    Projects,
    Skills,
    Footer,
  },
};
</script>

<style lang="postcss" scoped>
.home {
  @apply
    bg-gradient-to-b
    from-gray-800
    to-blue-900
  ;
}
</style>
