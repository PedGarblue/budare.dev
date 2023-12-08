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
    <a
      class="social-links__item"
      :href="`mailto:${contact.email}`"
      rel="noreferrer noopener" 
      target="_blank"
    >
      <font-awesome-icon :icon="['fas', 'envelope']" />
    </a>
  </div>
</template>

<script>
import contact from '@/data/contact';

export default {
  name: 'SocialLinks',
  setup() {
    return {
      contact,
    };
  },
};
</script>

<style lang="scss" scoped>
.social-links {
  @include flex(row, nowrap);

  font-size: 2rem;

  &__item {
    margin: 0 clamp(1rem, 10%, 2rem);
    color: #d5d5d5;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
