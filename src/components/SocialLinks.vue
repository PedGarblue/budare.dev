<template>
  <div class="social-links">
    <a
      class="social-links__item"
      rel="noreferrer noopener"
      target="_blank"
      :href="contact.resume"
      aria-label="Resume Download"
    >
      <icon-file-type-pdf size="28" />
    </a>
    <email-copy layoutType="icon" class="social-links__item pt-3"/>
    <a
      class="social-links__item"
      :href="contact.telegram"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Telegram"
    >
      <icon-brand-telegram size="28" />
    </a>
    <a
      class="social-links__item"
      :href="contact.github"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Github"
    >
      <icon-brand-github size="28" />
    </a>
    <a
      class="social-links__item"
      :href="contact.linkedin"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="linkedin"
    >
      <icon-brand-linkedin size="28" />
    </a>
  </div>
</template>

<script setup>
import contact from '@/data/contact';
import EmailCopy from './EmailCopy.vue';
import { IconFileTypePdf, IconBrandTelegram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-vue';
</script>

<style lang="postcss" scoped>
.social-links {
  @apply flex items-center justify-center gap-8 text-3xl;
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
