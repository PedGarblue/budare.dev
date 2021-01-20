<template>
  <nav class="navbar">
    <div class="container">
      <div class="flex">
        <div>
          <router-link to="/" class="brand">
            Pedro García
          </router-link>
        </div>
        <div class="flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--black);
  width: 100%;
  z-index: 3;
  padding: 0.1rem 0;
}
.flex {
  justify-content: space-between;
}
a {
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.75rem 0.5rem;
  border-radius: 0.35rem;
  color: var(--font-color-light);
}
a:hover {
  background-color: var(--gray);
}
.brand {
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.brand {
  color: var(--white);
}

@media screen and (min-width: 400px) {
  .navbar {
    padding: 2rem 0;
    position: static;
    background-color: transparent;
  }
  .brand {
    font-size: 1.3rem;
    color: var(--font-color);
  }
  a {
    color: var(--font-color);
    font-size: 1.2rem;
    font-weight: normal;
  }
  a:hover {
    background-color: var(--light-background);
  }
}
</style>
