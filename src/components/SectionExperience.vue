<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import colormap from 'colormap';
import { experiences } from '../data/experience';
import contact from '@/data/contact';
import ExperienceItem from './ExperienceItem.vue';
import PageSection from './PageSection.vue';
import ComponentCarousel from '@/components/lib/ComponentCarousel.vue';
import AnimatedHeading from './lib/AnimatedHeading.vue';
import { IconFileTypePdf, IconBrandLinkedin } from '@tabler/icons-vue';

const carousel = ref(null);
const experience = ref(null);

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const colors1 = colormap({
    colormap: 'density',
    nshades: 36,
    format: 'rgbaString',
    alpha: 1,
})
const colors2 = colormap({
    colormap: 'inferno',
    nshades: 20,
    format: 'rgbaString',
    alpha: 1,
})


onMounted(async () => {
  carousel.value.updateTotalItems(experiences.length)
})
</script>

<template>
  <page-section
    name="experience"
    :title="t('title')"
    class="relative"
    ref="experience"
    :style="{
      background: `linear-gradient(158deg, ${colors1[0]} 0%, ${colors2[10]} 25%, ${colors1[10]} 50%, ${colors2[7]} 75%, ${colors1[0]} 100%)`,
    }"
  >
    <template #body>
      <div class="experience-contents">
        <div class="flex flex-col md:flex-row my-10">
          <animated-heading
            heading-type="h2"
            text="5+ years"
            start-color="#3f7cb5"
            end-color="#ebe3e3"
            class="font-nunito tracking-wider"
          />
          <div class="text-3xl font-bold font-monserrat mt-auto mb-2 md:ml-2">
            Building Web Products
          </div> 

        </div>
        <div class="hidden lg:flex flex-col gap-4 lg:gap-8 pb-10">
          <ExperienceItem
            v-for="experience in experiences"
            :key="experience.title"
            :experience="experience"
          ></ExperienceItem>
        </div>
        <div class="lg:hidden">
          <ComponentCarousel ref="carousel" class="w-full">
            <ExperienceItem
              v-for="experience in experiences"
              :key="experience.title"
              :experience="experience"
            />
          </ComponentCarousel>
        </div>
        <div class="w-full flex flex-col mt-auto justify-center text-center">
          <div>
            <a
              class="mx-auto font-semibold text-sm xl:text-base 2xl:text-xl"
              :href="contact.resume"
              rel="noreferrer noopener"
              target="_blank"
            >
              {{ t('download_cv') }}
              <icon-file-type-pdf size="24" class="inline -mt-1"/>
            </a>
          </div>
          <div>
            <p>{{ t('or') }}</p>
          </div>
          <div >
            <a
              class="mx-auto font-semibold text-sm xl:text-base 2xl:text-xl"
              :href="contact.linkedin"
              rel="noreferrer noopener"
              target="_blank"
            >
              {{ t('contact_me_at_linkedin') }}
              <icon-brand-linkedin size="28" class="inline -mt-1"/>
            </a>
          </div>
        </div>
      </div>

    </template>

    <template #section-bg>
    </template>
  </page-section>
</template>

<style lang="postcss">
#experience {
  background: theme('colors.gray.800');
  background: linear-gradient(180deg, theme('colors.gray.800') 0%, theme('colors.gray.900') 100%);
}
.experience-contents {
  @apply flex flex-col h-full lg:bg-opacity-30 lg:rounded-3xl lg:px-8 lg:py-6 gap-5;
}

.about__paragraph {
  @apply text-lg;
  line-break: normal;
  white-space: pre-line;
}
</style>

<i18n>
  {
    "en": {
      "title": "Professional Experience",
      "download_cv": "Download CV",
      "contact_me_at_linkedin": "Contact me at ",
      "or": "Or"
    }, 
    "es": {
      "title": "Experiencia Profesional",
      "download_cv": "Descargar CV",
      "contact_me_at_linkedin": "Contáctame en",
      "or": "O"
    }
  }
  </i18n>
