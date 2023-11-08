<template>
  <footer class="footer">
    <section id="footer" class="flex flex-col h-screen">
      <div class="my-auto">
        <h2 class="footer__title">
          {{ t('want_to_contact_me') }}
        </h2>
        <nav class="footer__social">
          <social-links />
        </nav>
      </div>
      <div class="created-by">
        {{ t('created_by') }}
      </div>
    </section>
    <button-to-top />
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

<style lang="postcss" scoped>
.footer {
  @apply bg-gray-900;
}

.footer__title {
  @apply text-7xl;
  font-family: 'Bungee Shade', cursive;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ffd900 0%,
    #465ea0 29%,
    #ff1361 67%,
    #ffd900 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 900% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 20s linear infinite;
  display: inline-block;
}
.footer__social {
  @apply flex justify-center pt-6;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>

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
  font-size: $small-font-size;
  color: $primary-font-color;
}
</style>

<i18n>
{
  "en": {
    "created_by": "Created ❤️ by Pedro García.",
    "want_to_contact_me": "Contact me",
  },
  "es": {
    "created_by": "Creado ❤️ por Pedro García.",
    "want_to_contact_me": "Contáctame",
  }
}
</i18n>
