<template>
  <div class="home">
    <Blurb />
    <ShortAboutme />
    <Projects />
    <Skills />
  </div>
</template>

<script>
import Blurb from "@/components/blurb.vue";
import ShortAboutme from "@/components/short-aboutme.vue";
import Projects from "@/components/projects.vue";
import Skills from "@/components/skills.vue";

export default {
  name: "Home",
  components: {
    Blurb,
    ShortAboutme,
    Projects,
    Skills
  }
};
</script>
