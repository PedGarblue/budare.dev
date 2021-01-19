<template>
  <section class="short-aboutme">
    <div class="container">
      <p>
        {{ aboutme.short }}
      </p>
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
.container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0.1rem 0.1rem 0.3rem var(--gray);
  border-radius: 0.2rem;
  color: var(--black);
  font-family: "Ubuntu", Arial, Helvetica;
}
p {
  line-break: normal;
  white-space: pre;
}
</style>
