<script setup>
import { defineProps } from 'vue';
import ProjectsTag from './ProjectsTag.vue';
import CustomIcon from './lib/CustomIcon.vue';

defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="experience-item-container">
      <!--
          TODO: for some reason img renders with borders, cant remove with properties (very surreal behavior)
        -->
      <div class="images flex flex-row overflow-auto cursor-pointer hover:opacity-90 transition-opacity" v-viewer>
        <img
          v-for="(image, i) in experience.images"
          class="project_image"
          alt=""
          :src="image"
          loading="lazy"
          :key="i"
          :class="{
            'hidden': i > 0,
          }"
        />
      </div>
      <div class="project_contents">
        <div
          class="flex flex-row gap-x-4 flex-wrap items-center lg:gap-0 lg:flex-col lg:items-start mb-1"
        >
          <h2 class="text-lg xl:text-xl 2xl:text-2xl font-bold">{{ experience.title }}</h2>
          <h3 class="text-sm xl:text-base 2xl:text-xl font-monserrat">
            {{ experience.employer }}
            <a
              v-if="experience.employer_link"
              :href="experience.employer_link"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CustomIcon
                class="ml-1 lg:mb-0.5 text-sm text-gray-300"
                :icon="['fas', 'link']"
              />
            </a>
          </h3>
          <p class="text-sm 2xl:text-base">{{ experience.from }} - {{ experience.to }}</p>
        </div>
        <div class="h-full flex flex-col-reverse gap-y-2">
          <ol
            v-if="experience.description instanceof Array"
            class="experience-description-list"
          >
            <li
              v-for="point in experience.description"
              :key="point"
              class="text-xs my-1 2xl:text-sm"
            >
              {{ point }}
            </li>
          </ol>
          <p v-else class="text-xs 2xl:text-sm">
            {{ experience.description }}
          </p>

          <div v-if="experience.tags" class="flex flex-row flex-wrap gap-2 lg:mb-0">
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
.experience-item-container {
  @apply grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 items-start gap-2 2xl:gap-4;
}

.experience-description-list {
  list-style-type: disc;
  padding-left: 1rem;
}

.project_image {
  @apply mx-auto rounded-3xl shadow-lg border-none xl:h-52 2xl:h-60;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.project_contents {
  @apply flex flex-col;
}

@media (min-width: 1024px) {
  .project_image {
    grid-column: 2;
  }
  .project_contents {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
