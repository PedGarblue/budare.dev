<template>
  <section class="container">
    <h2>Projects</h2>
    <hr />
    <div>
      <div class="flex project">
        <div class="project-desc">
          <div class="text-medium text-bold">
            ☕ Cafechan
          </div>
          <div>
            Just an imageboard
          </div>
        </div>
        <a
          class="project-source text-bold"
          href="https://github.com/PedGarBlue/cafechan"
        >
          Source
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style scoped>
h2 {
  text-align: left;
  margin: 0;
}
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
