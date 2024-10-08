<template>
  <section id="blurb" ref="section">
    <div class="blurb">
      <div class="blurb__photo">
        <img :src="aboutme.picture" alt="Pedro García - Fullstack Developer"/>
      </div>
      <div class="blurb__desc desc">
        <div class="desc__name">{{ t('name') }}</div>
        <div class="desc__workname">{{ t('workname') }}</div>
        <social-links />
      </div>
    </div>
    <div class="w-full h-full absolute z-negative">
      <canvas-bg v-bind="animBackgroundOptions" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SocialLinks from './SocialLinks.vue';
import aboutme from '@/data/aboutme';

const CanvasBg = defineAsyncComponent(() =>
  import('@/components/CanvasBg.vue')
);

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const section = ref(null)
const animBackgroundOptions = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

onMounted(() => {
  animBackgroundOptions.width = section.value.offsetWidth
  animBackgroundOptions.height = section.value.offsetHeight
})
</script>

<style lang="postcss" scoped>
#blurb {
  @apply flex flex-col justify-center items-center pb-0 relative;
  height: calc(100vh);
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
    xl:mx-6
    2xl:mx-12;
}

.desc__name {
  @apply font-medium text-4xl lg:text-4xl 2xl:text-5xl tracking-wide font-monserrat;
}
.desc__workname {
  @apply text-xl font-monserrat text-gray-300;
}
.blurb {
  @apply mx-auto flex items-center flex-col lg:flex-row;
  padding: 0 1rem;
  padding-top: 0rem;
  margin-right: auto
}

.blurb__photo {
  @apply flex justify-center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}

.blurb__photo img {
  @apply border-2 border-white border-opacity-30 h-52 w-52 lg:h-44 lg:w-44 2xl:h-52 2xl:w-52;
  padding: 0.5rem;
  border-radius: 50%;
}

@media (min-width: theme('screens.lg')) {
  .blurb {
    margin-left: 9vw;
  }
}

@media (min-width: theme('screens.2xl')) {
  #blurb {
    height: calc(100vh);
  }
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
