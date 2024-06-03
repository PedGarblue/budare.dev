<script setup>
import { defineProps } from 'vue';
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
    <div class="flex flex-row items-center gap-4">
      <div>
        <!--
          TODO: for some reason img renders with borders, cant remove with properties (very surreal behavior)
        -->
        <div
          class="h-72 w-72 rounded-3xl shadow-lg border-none"
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
        <div v-if="experience.tags" class="flex flex-row gap-2">
          <span v-for="tag in experience.tags" :key="tag.title">
            <custom-icon :icon="tag.icon" :style="tag.style" class="mr-1"/>
            <span>{{ tag.title }}</span>
          </span>
        </div>
        <ol
          v-if="experience.description instanceof Array"
          class="experience-description-list"
        >
          <li
            v-for="point in experience.description"
            :key="point"
            class="text-lg"
          >
            {{ point }}
          </li>
        </ol>
        <p v-else class="text-lg">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-description-list {
  list-style-type: disc;
  padding-left: 1rem;
}
</style>
