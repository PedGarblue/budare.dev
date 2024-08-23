<template>
  <footer
    class="footer"
    :style="{
      '--gradient-color-1': colorsInferno[5],
      '--gradient-color-2': colorsInferno[9],
      '--gradient-color-3': colorsInferno[10],
      '--gradient-color-4': colorsInferno[15]
    }"
  >
    <section id="contact" class="flex flex-col h-screen">
      <div class="my-auto ">
        <h2 class="footer__title">
          {{ t('want_to_contact_me') }}
        </h2>
        <!-- of my work status (searching position) -->
        <div class="footer__work-status">
          <b>{{ t('my_job_status') }}</b> <br />
          {{ t('contact_me_through') }}
        </div>
        <div class="mb-0 mt-5">
          <email-copy class="mx-auto"/>
        </div>
        <nav class="footer__social">
          <social-links />
        </nav>
      </div>
      <div class="created-by">
        {{ t('created_by') }}
      </div>
    </section>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import colormap from 'colormap';
import contact from '@/data/contact';
import SocialLinks from './SocialLinks.vue';
import EmailCopy from './EmailCopy.vue';

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const colorsDensity = colormap({
    colormap: 'density',
    nshades: 36,
    format: 'rgbaString',
    alpha: 1,
})

const colorsInferno = colormap({
    colormap: 'inferno',
    nshades: 20,
    format: 'rgbaString',
    alpha: 1,
})
</script>

<style lang="postcss" scoped>
.footer {
  background: linear-gradient(-45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-3), var(--gradient-color-4));
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}

.footer__work-status {
  @apply text-center text-2xl mt-6;
  font-family: 'Nunito', sans-serif;
  color: #fff;
}

.footer__title {
  @apply text-5xl lg:text-7xl;
  font-family: 'Bungee Shade', cursive;
  text-transform: uppercase;
  background-image: linear-gradient(
    -45deg,
    #ffffff 0%,
    #d8d8d8 75%,
    #ffffff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 20s ease infinite;

  display: inline-block;
}
.footer__social {
  @apply flex justify-center pt-6 text-2xl;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.contact-icon {
  margin: 0 1rem; /* Equivalent to $medium-space */
  font-size: 1.5rem; /* Equivalent to $medium-space * 1.5 */
}

.footer {
  @apply flex flex-col;
}

.footer__contents {
  margin-top: 2rem; /* Equivalent to $big-space */
  margin-bottom: 2rem; /* Equivalent to $big-space */
}

.created-by {
  width: 100%;
  font-size: 0.85rem; /* Equivalent to $small-font-size */
  color: hsl(0, 4%, 95%); /* Equivalent to $primary-font-color */
}
</style>

<i18n>
{
  "en": {
    "created_by": "Created ❤️ by Pedro García.",
    "want_to_contact_me": "Contact me",
    "my_job_status": "Want me to work with you? I'm available for hire :)",
    "contact_me_through": "Contact to one of my social networks or send me an email 🔥",
  },
  "es": {
    "created_by": "Creado ❤️ por Pedro García.",
    "want_to_contact_me": "Contáctame",
  }
}
</i18n>
