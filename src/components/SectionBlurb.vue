<template>
  <section id="blurb">
    <div class="blurb" data-aos="fade" data-aos-easing="ease-in-sine">
      <div class="blurb__photo">
        <img :src="aboutme.picture" />
      </div>
      <div class="blurb__desc desc">
        <div class="desc__name">{{ t('name') }}</div>
        <div class="desc__workname">{{ t('workname') }}</div>
        <social-links />
      </div>
    </div>
    <div class="w-full h-full absolute z-negative">
      <canvas-bg />
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import SocialLinks from './SocialLinks.vue';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';
import CanvasBg from '@/components/CanvasBg.vue';
import EmailCopy from '@/components/EmailCopy.vue';

export default {
  name: 'SectionBlurb',
  components: {
    CanvasBg,
    SocialLinks,
    EmailCopy,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      contact,
      aboutme,
    };
  },
};
</script>

<style lang="postcss" scoped>
#blurb {
  @apply flex flex-col justify-center items-center pb-0 relative;
  height: calc(100dvh - 4rem);
}

/* .blurb {} */

.blurb__contact {
  @apply flex ml-auto;
}

.desc {
  @apply flex
    flex-col
    justify-center
    text-center
    m-auto
    gap-2
    xl:items-start
    xl:mx-12;
}

.desc__name {
  @apply font-medium text-4xl lg:text-5xl tracking-wide font-monserrat;
}
.desc__workname {
  @apply text-xl font-monserrat text-gray-300;
}

@media screen and (min-width: 768px) {
  #blurb {
    height: calc(100dvh - 4rem);
  }
}
.blurb {
  @apply mx-auto flex items-center flex-col lg:flex-row;
  padding: 0 1rem;
  margin-top: 1rem; /* Equivalent to $medium */
  padding-top: 4rem; /* Equivalent to $extra-big-space */
  margin-right: auto
}

.blurb__photo {
  @apply flex justify-center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem; /* Equivalent to $medium-space */
}

.blurb__photo img {
  @apply border-2 border-white border-opacity-30;
  padding: 0.5rem;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
}

@media (min-width: 800px) {
  .blurb {
    margin-left: 12vw;
  }

  .blurb__photo {
    margin: unset;
    justify-content: flex-start;
  }
}
</style>

<i18n>
{
  "en": {
    "name": "Pedro García",
    "workname": "Web Application Developer",
    "contact_me": "Contact me"
  },
  "es": {
    "name": "Pedro García",
    "workname": "Desarrollador Web Full Stack",
    "contact_me": "Contáctame",
  }
}
</i18n>
