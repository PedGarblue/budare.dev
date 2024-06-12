<script setup>
import { defineProps } from 'vue';
import ProjectsTag from './ProjectsTag.vue';

defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="w-max max-w-full lg:w-auto flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
      <!--
          TODO: for some reason img renders with borders, cant remove with properties (very surreal behavior)
        -->
      <img class="project_image" alt="" :src="experience.image" />
      <div class="flex flex-col">
        <div
          class="flex flex-row gap-4 lg:gap-0 lg:flex-col items-center lg:items-start"
        >
          <h3 class="text-lg lg:text-2xl font-bold">{{ experience.title }}</h3>
          <h3 class="text-sm lg:text-xl font-monserrat">
            {{ experience.employer }}
          </h3>
        </div>
        <p class="text-sm lg:text-base">{{ experience.from }} - {{ experience.to }}</p>
        <div class="flex flex-col-reverse lg:flex-col ">
          <ol
            v-if="experience.description instanceof Array"
            class="experience-description-list"
          >
            <li
              v-for="point in experience.description"
              :key="point"
              class="text-sm lg:text-base"
            >
              {{ point }}
            </li>
          </ol>
          <p v-else class="text-sm lg:text-base">
            {{ experience.description }}
          </p>

          <div v-if="experience.tags" class="flex flex-row flex-wrap gap-2 mb-2 lg:mb-0">
            <projects-tag
              v-for="tag in experience.tags"
              :key="tag.title"
              :data="tag"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-description-list {
  list-style-type: disc;
  padding-left: 1rem;
}
.project_image {
  @apply rounded-3xl shadow-lg border-none h-56 lg:h-80;
  object-fit: cover;
  aspect-ratio: 16/9;
}
</style>
