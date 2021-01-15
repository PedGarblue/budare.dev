<template>
  <section class="container">
    <h2>Projects</h2>
    <hr />
    <div>
      <div v-for="project in projects" :key="project.name" class="flex project">
        <div class="project-desc">
          <div class="text-medium text-bold">
            {{ project.name }}
          </div>
          <div>
            {{ project.desc }}
          </div>
        </div>
        <a class="project-source text-bold" :href="project.source">
          Source
        </a>
      </div>
    </div>
    <div class="text-center margin-l-top">
      <a class="button" href="https://github.com/PedGarblue">
        See more in
        <span class="text-medium">
          <font-awesome-icon :icon="['fab', 'github']" />
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import projects from "@/data/projects";

export default {
  name: "Projects",
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.project {
  text-align: left;
}
.project-source {
  margin-left: auto;
  background-color: var(--blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
}
</style>
