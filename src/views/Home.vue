<template>
  <div class="home">
    <Blurb />
    <About />
    <Projects />
    <Skills />
  </div>
</template>

<script>
import Blurb from '@/components/Blurb';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default {
  name: 'Home',
  components: {
    Blurb,
    About,
    Projects,
    Skills,
  },
};
</script>
