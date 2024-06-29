<template>
  <component :is="type" class="skill" v-bind="linkAttributes" >
    <custom-icon
      v-if="skill.icon"
      :icon="skill.icon"
      :style="skill.style"
      class="skill__icon"
    />
    <span class="skill__title">
      {{ title }}
      <span
        v-if="skill.certificate"
        class="skill__certificate"
      >
        <custom-icon :icon="['fas', 'certificate']" />
      </span>
    </span>
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import CustomIcon from './lib/CustomIcon.vue';

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
});


const type = computed(() => props.skill.certificate ? 'a' : 'span')
const linkAttributes = computed(() => {
  if (props.skill.certificate) {
    return {
      href: props.skill.certificate,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return {}
})

const title = computed(() => {
  let title = props.skill.title;
  if (props.skill.level) title = `${title} - ${props.skill.level}`;
  return title;

})
</script>

<style lang="postcss" scoped>
.skill {
  @apply flex
    flex-col
    m-4
    py-1
    rounded
    text-white
    text-xs
    font-bold
    lg:w-max
    lg:py-2 lg:px-4 
    lg:bg-gray-800
    lg:border
    lg:border-gray-900
    lg:border-opacity-30
    lg:bg-opacity-20
    lg:shadow-md
    2xl:text-sm
  ;

  align-items: center;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
}
.skill__icon {
  @apply text-xl 2xl:text-3xl mb-1 h-5 2xl:h-7;
}
.skill__title {
  @apply h-4;
}
.skill__certificate {
  @apply md:ml-2;
  color: #d6bf4d;
}
</style>
