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
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
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
  padding: 2rem 0;
  position: static;
}
.flex {
  justify-content: space-between;
}
a {
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.35rem;
  margin: 0 0.35rem;
}
a:hover {
  background-color: var(--light-background);
}
button {
  cursor: pointer;
  border: none;
  padding: 0.95rem 0.75rem;
  background-color: transparent;
  border-radius: 0.35rem;
  font-size: 1.2rem;
}
button:hover {
  background-color: var(--light-background);
}
.brand {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}
</style>
