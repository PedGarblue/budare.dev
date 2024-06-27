<template>
    <PageSection
        class="about"
        name="about"
    >
        <template #body>
            <div class="h-full flex justify-center items-center">
                <div class="flex flex-row gap-10">
                    <div class="about__photo">
                        <img :src="aboutme.picture" />
                    </div>
                    <div class="py-5">
                      <h2 class="font-monserrat text-3xl">{{ t('aboutme') }}</h2>
                      <div class="max-w-prose">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime, quibusdam blanditiis facilis corporis incidunt. Velit, possimus consequatur molestiae laborum nisi itaque explicabo perferendis animi ea quisquam sequi, autem vero.</p>
                      </div>
                    </div>
                </div>
            </div>
        </template>
        <template #section-bg>
            <div class="about-background"
                :style="{
                    background: `linear-gradient(103deg, ${colors[1]} 0%, ${colors[10]} 40%, ${colors[10]} 60%, ${colors[1]} 100%)`
                }"
            />
            <div class="clips">
              <div class="clip1" />
              <div class="clip2" />
              <div class="clip3" />
              <div class="clip4" />
            </div>
        </template>
    </PageSection>
</template>

<script setup>
import colormap from 'colormap';
import { useI18n } from 'vue-i18n';
import PageSection from "./PageSection.vue";
import aboutme from '@/data/aboutme';

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const colors = colormap({
  colormap: 'density',
  nshades: 36,
  format: 'rgbaString',
  alpha: 1,
});

console.log(colors)

</script>

<style lang="postcss" scoped>
.about {
    @apply relative;
}
.about-background {
    @apply w-full h-full absolute top-0 z-negative;
}
.about__photo {
  @apply flex justify-center;
}
.about__photo img {
  @apply border-2 border-white border-opacity-30;
  padding: 0.5rem;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
}

.clips {
  @apply absolute bottom-0 left-0 w-full h-full;
  z-index: -10;
}
.clip {
  backdrop-filter: blur(10px);
}
.clip1 {
  @apply clip absolute bottom-0 left-0;
  background-color: rgba(119,123,217,0.7);
  width: 70%;
  height: 95%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -10;
  backdrop-filter: blur(10px);
}
.clip2 {
  @apply absolute bg-gray-400 bg-opacity-95 bottom-0 left-0;
  background-color: rgba(113,53,144,1);
  width: 60%;
  height: 75%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -10;
}
.clip3 {
  @apply absolute bottom-0 right-0;
  background-color: rgba(75,19,62,1);
  width: 60%;
  height: 65%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  z-index: -11;
    color: rgba(61,16,45,1);
    color: rgba(68,18,54,1);  
    color: rgba(75,19,62,1);  
    color: rgba(82,21,71,1);  
    color: rgba(89,23,80,1);  
    color: rgba(94,29,93,1);  
    color: rgba(100,34,106,1);  
    color: rgba(105,40,119,1);  
    color: rgba(110,45,132,1);  
    color: rgba(113,53,144,1);  
    color: rgba(115,61,155,1);  
    color: rgba(118,69,167,1);  
    color: rgba(120,77,178,1);  
    color: rgba(120,84,185,1);  
    color: rgba(120,91,192,1);  
    color: rgba(120,99,199,1);  
    color: rgba(120,106,206,1);  
    color: rgba(120,113,213,1);  
    color: rgba(119,123,217,1);  
    color: rgba(118,132,221,1);  
    color: rgba(116,142,224,1);  
    color: rgba(115,151,228,1);  
    color: rgba(120,160,228,1);  
    color: rgba(125,168,228,1);  
    color: rgba(129,177,227,1);  
    color: rgba(134,185,227,1);  
    color: rgba(143,191,227,1);  
    color: rgba(151,197,227,1);  
    color: rgba(160,202,227,1);  
    color: rgba(168,208,227,1);  
    color: rgba(177,214,227,1);  
    color: rgba(190,221,231,1);  
    color: rgba(204,228,234,1);  
    color: rgba(217,234,238,1);  
    color: rgba(230,241,241,1); 
}

</style>

<i18n>
{
  "en": {
    "aboutme": "About me"
  },
  "es": {
    "aboutme": "Sobre mi"
  }
}
</i18n>
