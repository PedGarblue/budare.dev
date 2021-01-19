<template>
  <section>
    <div class="container">
      <div class="short-aboutme">
        <p>
          {{ aboutme.short }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import aboutme from "@/data/aboutme";

export default {
  name: "ShortAboutme",
  data() {
    return {
      aboutme
    };
  }
};
</script>

<style scoped>
.short-aboutme {
  padding: 1rem 1.5rem;
  box-shadow: 0.1rem 0.1rem 0.3rem var(--gray);
  border-radius: 0.2rem;
  color: var(--black);
  font-family: "Ubuntu", Arial, Helvetica;
}
p {
  line-break: normal;
  white-space: pre-line;
}
</style>
