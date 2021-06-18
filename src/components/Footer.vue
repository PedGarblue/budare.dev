<template>
  <footer class="footer">
    <section class="footer__contents">
      <nav class="footer__social">
        <social-links />
      </nav>
    </section>
    <button-to-top />
    <div class="created-by">
      {{ t('created_by') }}
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import contact from '@/data/contact';
import ButtonToTop from './lib/ButtonToTop';
import SocialLinks from './SocialLinks';

export default {
  name: 'Footer',
  components: {
    ButtonToTop,
    SocialLinks,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      locale,
      contact,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-icon {
  margin: 0 $medium-space;
  font-size: $medium-space * 1.5;
}

.footer {
  @include flex(column);

  &__contents {
    margin-top: $big-space;
    margin-bottom: $big-space;
  }
}

.created-by {
  width: 100%;
  background-color: $secondary-color;
  font-size: $medium-space;
  color: $primary-font-color;
}
</style>

<i18n>
{
  "en": {
    "created_by": "Created ❤️ by Pedro García.",
  },
  "es": {
    "created_by": "Creado ❤️ por Pedro García.",
  }
}
</i18n>
