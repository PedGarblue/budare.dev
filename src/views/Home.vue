<template>
  <div class="home">
    <Blurb />
    <Projects />
  </div>
</template>

<script>
import Blurb from "@/components/blurb.vue";
import Projects from "@/components/projects.vue";

export default {
  name: "Home",
  components: {
    Blurb,
    Projects
  }
};
</script>
