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
    <div class="flex flex-row items-center gap-4">
      <div>
        <!--
          TODO: for some reason img renders with borders, cant remove with properties (very surreal behavior)
        -->
        <div
          class="project_image"
          alt=""
          :style="{
            backgroundImage: `url(https://cdn.filestackcontent.com/dP2eldQPW6WEUHddJS5w)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        />
      </div>
      <div class="flex flex-col">
        <h3 class="text-2xl font-bold">{{ experience.title }}</h3>
        <p class="text-lg">{{ experience.from }} - {{ experience.to }}</p>

        <ol
          v-if="experience.description instanceof Array"
          class="experience-description-list"
        >
          <li
            v-for="point in experience.description"
            :key="point"
            class="text-base"
          >
            {{ point }}
          </li>
        </ol>
        <p v-else class="text-base">{{ experience.description }}</p>

        <div v-if="experience.tags" class="flex flex-row gap-2">
          <projects-tag
            v-for="tag in experience.tags"
            :key="tag.title"
            :data="tag"
          />
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
  @apply h-52 rounded-3xl shadow-lg border-none;
  aspect-ratio: 16/9;
}
</style>
