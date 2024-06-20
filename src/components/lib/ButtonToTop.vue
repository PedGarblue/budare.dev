<template>
  <button id="go-to-top" @click="toTop" :style="{
    opacity: showButton ? 1 : 0,
    pointerEvents: showButton.value ? 'auto' : 'none'
  }">
    <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </button>
</template>

<script setup>
  import { computed, inject } from 'vue';

  const scrollToSection = inject('scrollToSection')
  const activeSection = inject('activeSection')

  const toTop = () => {
    scrollToSection(0)
  }

  const showButton = computed(() => activeSection.value > 0)
</script>

<style lang="postcss" scoped>
#go-to-top {
  @apply flex fixed w-12 h-12 p-4 bg-gray-900 bg-opacity-40 border rounded-full text-white;
  backdrop-filter: blur(5px);
  top: calc(100vh - 7rem);
  left: calc(100vw - 4rem);
  cursor: pointer;
  transition: opacity 0.3s;
}

@media (min-width: 1024px) {
  #go-to-top {
    left: 90vw;
  }
}
</style>
