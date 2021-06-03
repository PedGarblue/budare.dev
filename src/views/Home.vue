<template>
  <div class="home">
    <Blurb />
    <About />
    <Projects />
    <Skills />
  </div>
</template>

<script>
import Blurb from '@/components/blurb.vue';
import About from '@/components/about.vue';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills.vue';

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
