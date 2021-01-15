<template>
  <div class="home">
    <Blurb />
    <Projects />
    <Skills />
  </div>
</template>

<script>
import Blurb from "@/components/blurb.vue";
import Projects from "@/components/projects.vue";
import Skills from "@/components/skills.vue";

export default {
  name: "Home",
  components: {
    Blurb,
    Projects,
    Skills
  }
};
</script>
