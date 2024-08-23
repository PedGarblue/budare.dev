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
                        <img :src="aboutme.picture" alt="Pedro García - Fullstack Developer" />
                    </div>
                    <div class="py-0">
                      <h2 class="font-monserrat text-2xl lg:text-4xl mb-4 text-center lg:text-left">{{ t('aboutme') }}</h2>
                      <div
                        class="
                          about__content
                        "
                      >
                        <blockquote class="border-l-2 pl-4 italic border-gray-900 text-base md:text-lg mb-4 font-semibold">
                          {{ t('budare_def') }}
                        </blockquote>
                        <p v-for="(paragraph, i) in t('contents').split('[]')" :key="i" class="my-2">
                          {{ paragraph }}
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </template>
        <template #section-bg>
            <div class="about-background"
                :style="{
                    background: `linear-gradient(103deg, ${colors[1]} 0%, ${colors[12]} 40%, ${colors[12]} 60%, ${colors[1]} 100%)`
                }"
            />
            <div class="clips">
              <div
                class="clip1"
                :style="{
                  background: `linear-gradient(188deg, ${colors[0]} 0%, ${colors[19]} 79%)`
                }"
              />
              <div
                class="clip2"
                :style="{
                  background: `linear-gradient(351deg, ${colors[0]} 0%, ${colors[14]} 79%)`
                }"
              />
              <div
                class="clip3"
                :style="{
                  background: `linear-gradient(130deg, ${colors[0]} 0%, ${colors[10]} 79%)`
                }"
              />
              <div
                class="clip4"
                :style="{
                  background: `linear-gradient(354deg, ${colors[10]} 0%, ${colors[20]} 79%)`
                }"
              />
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
  colormap: 'cdom',
  nshades: 36,
  format: 'rgbaString',
  alpha: 1,
});

</script>

<style lang="postcss">
.about .section-container {
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<style lang="postcss" scoped>
.about {
  @apply flex flex-col;
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
.about {
    @apply relative;
}
.about-background {
    @apply w-full h-full absolute top-0 z-negative;
}
.about__photo {
  @apply flex justify-center items-center;
}
.about__photo img {
  @apply border-2 border-white border-opacity-30;
  padding: 0.5rem;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
}
.about__content {
  @apply
    max-w-prose
    font-nunito font-light
    px-2 py-4
    rounded
    shadow
    bg-gray-800
    bg-opacity-30
    md:p-0
    md:shadow-none
    md:bg-transparent
    md:text-lg;

    backdrop-filter: blur(10px);
}



.clips {
  @apply absolute bottom-0 left-0 w-full h-full;
  z-index: -10;
}
.clip {
  backdrop-filter: blur(10px);
}
.clip1 {
  @apply clip absolute bottom-0 left-0 shadow;
  background: rgb(45,15,44);
  width: 100%;
  height: 99%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -9;
  backdrop-filter: blur(10px);
}
.clip2 {
  @apply absolute bg-gray-400 bg-opacity-95 bottom-0 left-0 shadow;
  background: rgb(45,15,44);
  width: 90%;
  height: 90%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  z-index: -7;
}
.clip3 {
  @apply absolute bottom-0 right-0 shadow;
  background-color: rgba(129,177,227,1);
  width: 100%;
  height: 99%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  z-index: -8;
}
.clip4 {
  @apply absolute bottom-0 right-0 shadow;
  background: rgb(45,15,44);
  width: 90%;
  height: 90%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  z-index: -6;
}

@media (min-width: theme('screens.md')) {
  .about__content {
    backdrop-filter: none;
  }
}

@media (min-width: theme('screens.lg')) {
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
    "budare_def": "The \"budare\" is a traditional Venezuelan cooking utensil, similar to a griddle, that is used to cook arepas.",
    "aboutme": "About me",
    "contents": "I'm dedicated to my hobbies, gaming, fitness, scale models and programming.[]Most of my knowlege in software development was acquired through self-taught methods, devouring books like Robert C. Martin Collection and O'Reilly Software Architecture Collection, searching and reading documentation (MDN, php.net, etc), online educational platforms.[]And of course, a lot of concentration, discipline and practice with personal projects. 💪"
  },
  "es": {
    "aboutme": "Sobre mi",
    "contents": "Me gradué como Técnico Medio en Tecnologías de la Información. Adquirí mis conocimientos en Desarrollo de Software principalmente de forma autodidacta, haciendo uso de libros de Código y Arquitectura de Sistemas como Robert C. Martin Collection y O'Reilly Software Architecture Collection, documentación de software (MDN, php.net, etc), plataformas educativas online, y por supuesto, mucha concentración, disciplina y práctica con proyectos personales." }
}
</i18n>
