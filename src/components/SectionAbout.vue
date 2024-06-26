<template>
    <PageSection
        class="about"
        name="about"
        title=""
    >
        <template #body>
            <div class="h-full flex justify-center items-center">
                <div class="flex flex-col lg:flex-row gap-10 xl:mb-40">
                    <div class="about__photo">
                        <img :src="aboutme.picture" />
                    </div>
                    <div class="py-0">
                      <h2 class="font-monserrat text-2xl lg:text-4xl mb-4 text-center lg:text-left">{{ t('aboutme') }}</h2>
                      <div
                        class="
                          max-w-prose
                          font-nunito font-medium
                          px-2 py-4
                          rounded
                          shadow
                          bg-gray-800
                          bg-opacity-70
                          md:p-0
                          md:shadow-none
                          md:bg-transparent
                          md:text-xl
                        "
                      >
                        <p>{{ t('contents') }}</p>
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
    // color: rgba(61,16,45,1);
    // color: rgba(68,18,54,1);  
    // color: rgba(75,19,62,1);  
    // color: rgba(82,21,71,1);  
    // color: rgba(89,23,80,1);  
    // color: rgba(94,29,93,1);  
    // color: rgba(100,34,106,1);  
    // color: rgba(105,40,119,1);  
    // color: rgba(110,45,132,1);  
    // color: rgba(113,53,144,1);  
    // color: rgba(115,61,155,1);  
    // color: rgba(118,69,167,1);  
    // color: rgba(120,77,178,1);  
    // color: rgba(120,84,185,1);  
    // color: rgba(120,91,192,1);  
    // color: rgba(120,99,199,1);  
    // color: rgba(120,106,206,1);  
    // color: rgba(120,113,213,1);  
    // color: rgba(119,123,217,1);  
    // color: rgba(118,132,221,1);  
    // color: rgba(116,142,224,1);  
    // color: rgba(115,151,228,1);  
    // color: rgba(120,160,228,1);  
    // color: rgba(125,168,228,1);  
    // color: rgba(129,177,227,1);  
    // color: rgba(134,185,227,1);  
    // color: rgba(143,191,227,1);  
    // color: rgba(151,197,227,1);  
    // color: rgba(160,202,227,1);  
    // color: rgba(168,208,227,1);  
    // color: rgba(177,214,227,1);  
    // color: rgba(190,221,231,1);  
    // color: rgba(204,228,234,1);  
    // color: rgba(217,234,238,1);  
    // color: rgba(230,241,241,1); 
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
  background: rgb(45,15,44);
  background: linear-gradient(218deg, rgba(45,15,44,1) 0%, rgba(119,123,217,1) 79%);
  width: 100%;
  height: 99%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -9;
  backdrop-filter: blur(10px);
}
.clip2 {
  @apply absolute bg-gray-400 bg-opacity-95 bottom-0 left-0;
  background: rgb(45,15,44);
  background: linear-gradient(218deg, rgba(45,15,44,1) 0%, rgba(75,19,62,1) 79%);
  width: 90%;
  height: 90%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -7;
}
.clip3 {
  @apply absolute bottom-0 right-0;
  background-color: rgba(129,177,227,1);
  width: 100%;
  height: 99%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  z-index: -8;
}
.clip4 {
  @apply absolute bottom-0 right-0;
  background: rgb(45,15,44);
  background: linear-gradient(130deg, rgba(45,15,44,1) 0%, rgba(105,40,119,1) 79%);
  width: 90%;
  height: 90%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  z-index: -6;
}

@media (min-width: 768px) {
  .clip1 {
    width: 65%;
    height: 99%;
  }
  .clip2 {
    width: 60%;
    height: 75%;
  }
  .clip3 {
    width: 75%;
    height: 75%;
  }
  .clip4 {
    width: 65%;
    height: 60%;
  }
}
</style>

<i18n>
{
  "en": {
    "aboutme": "About me",
    "contents": "I graduated with an Associate Degree in informational technologies. I acquired my knowledge in Software Development mainly in a self-taught manner, making use of books for Code and Systems architecture like the Robert C. Martin Collection and O'Reilly Software Architecture Collection, software documentation (MDN, php.net, etc), online educational platforms, and of course, a lot of focus, discipline, and practice with personal projects."
  },
  "es": {
    "aboutme": "Sobre mi",
    "contents": "Me gradué como Técnico Medio en Tecnologías de la Información. Adquirí mis conocimientos en Desarrollo de Software principalmente de forma autodidacta, haciendo uso de libros de Código y Arquitectura de Sistemas como Robert C. Martin Collection y O'Reilly Software Architecture Collection, documentación de software (MDN, php.net, etc), plataformas educativas online, y por supuesto, mucha concentración, disciplina y práctica con proyectos personales." }
}
</i18n>
