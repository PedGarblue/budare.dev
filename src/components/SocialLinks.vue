<template>
  <div class="social-links">
    <a
      class="social-links__item"
      :href="contact.github"
      rel="noreferrer noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      class="social-links__item"
      :href="contact.linkedin"
      rel="noreferrer noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
    <a
      class="social-links__item"
      :href="contact.telegram"
      rel="noreferrer noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'telegram']" />
    </a>
    <email-copy layoutType="icon" class="social-links__item"/>
  </div>
</template>

<script setup>
import contact from '@/data/contact';
import EmailCopy from './EmailCopy.vue';
</script>

<style lang="postcss" scoped>
.social-links {
  @apply flex items-center justify-center gap-8;

  font-size: 2rem;
}

.social-links__item {
  color: #d5d5d5;
}

.social-links__item:first-child {
  margin-left: 0;
}

.social-links__item:last-child {
  margin-right: 0;
}
</style>
