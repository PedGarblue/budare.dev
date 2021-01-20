<template>
  <section id="about">
    <div class="container">
      <h2>About me</h2>
      <hr />
      <div class="card">
        <p>
          {{ aboutme.short }}
        </p>
      </div>
      <div class="card margin-m-top">
        <div class="flex">
          <font-awesome-icon
            class="text-medium margin-s-right"
            :icon="['fas', 'globe-americas']"
          />
          <span class="margin-s-horizontal"> {{ aboutme.localization }} </span>
        </div>
        <div class="flex">
          <font-awesome-icon
            class="text-medium margin-s-right"
            :icon="['fas', 'phone-square']"
          />
          <span class="margin-s-horizontal"> {{ aboutme.phone }} </span>
        </div>
        <div class="flex">
          <font-awesome-icon
            class="text-medium margin-s-right"
            :icon="['fas', 'envelope']"
          />
          <span class="margin-s-horizontal"> {{ aboutme.email }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutme from '@/data/aboutme';

export default {
  name: 'ShortAboutme',
  data() {
    return {
      aboutme,
    };
  },
};
</script>

<style scoped>
.card {
  padding: 1rem 1.5rem;
  box-shadow: 0.1rem 0.1rem 0.3rem var(--gray);
  border-radius: 0.2rem;
  color: var(--black);
}
p {
  line-break: normal;
  white-space: pre-line;
}
</style>
