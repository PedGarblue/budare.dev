<template>
  <footer class="flex-column">
    <section class="flex-column container">
      <nav class="flex text-big">
        <a
          class="contact-icon"
          href="https://github.com/PedGarblue"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          class="contact-icon"
          href="https://www.linkedin.com/in/pedro-garcia-acosta"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          class="contact-icon"
          href="https://t.me/pedgarcia"
          rel="noreferrer noopener"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
      </nav>
    </section>
    <div class="designed-by-me text-small">
      Designed ❤️ by Pedro García.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
nav a {
  margin: 0 0.3rem;
}
footer section {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}
.designed-by-me {
  width: 100%;
  background-color: var(--black);
  color: white;
}
</style>
