<template>
  <div class="home">
    <Blurb />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import Blurb from '@/components/blurb.vue';
import About from '@/components/about.vue';
import Projects from '@/components/projects.vue';
import Skills from '@/components/skills.vue';
import Contact from '@/components/contact.vue';

export default {
  name: 'Home',
  components: {
    Blurb,
    About,
    Projects,
    Skills,
    Contact,
  },
};
</script>
