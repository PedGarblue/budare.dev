<template>
  <section id="projects">
    <div class="container">
      <h2>Projects</h2>
      <hr />
      <div>
        <div
          v-for="project in projects"
          :key="project.name"
          class="flex project"
        >
          <div class="project-desc">
            <div class="text-medium text-bold">
              <a :href="project.demoUrl" rel="noreferrer noopener">
                {{ project.name }}
              </a>
            </div>
            <div>
              {{ project.desc }}
            </div>
          </div>
          <a
            class="project-source text-bold"
            :href="project.source"
            rel="noreferrer noopener"
          >
            Source
          </a>
        </div>
      </div>
      <div class="text-center margin-l-top">
        <a class="button" :href="contact.github" rel="noreferrer noopener">
          See more in
          <span class="text-medium">
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/data/projects';
import contact from '@/data/contact';

export default {
  name: 'Projects',
  data() {
    return {
      projects,
      contact,
    };
  },
};
</script>

<style scoped>
.project {
  text-align: left;
  flex-wrap: nowrap;
  margin: 0.8rem 0;
}
.project-desc {
  margin: 0 0.3em;
}
.project-source {
  margin-left: auto;
  background-color: var(--blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  box-shadow: 0.01em 0.01em 0.2em var(--black);
}

@media screen and (min-width: 400px) {
  .project-desc {
    margin: 0;
  }
}
</style>
