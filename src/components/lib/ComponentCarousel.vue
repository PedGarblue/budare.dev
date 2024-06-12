<script setup>
import { ref } from 'vue';

const currentIndex = ref(0);
const padding = ref('0');

const prevComponent = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    padding.value = currentIndex.value === 0 ? '0' : '-0.5';
  }
};

const nextComponent = () => {
  if (currentIndex.value < totalItems.value - 1) {
    currentIndex.value += 1;
    padding.value = '0.5'
  }
};

const totalItems = ref(0);
const updateTotalItems = count => {
  totalItems.value = count;
};

defineExpose({ updateTotalItems });
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="flex flex-row transition-transform duration-500 ease-in-out gap-2"
      :style="{ transform: `translateX(calc(-${currentIndex * 100}% - ${padding}rem))` }"
    >
      <slot></slot>
    </div>
    <button
      class="prev"
      @click="prevComponent"
    >
      &lt;
    </button>
    <button
      class="next"
      @click="nextComponent"
    >
      &gt;
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.control-button {
  @apply absolute top-28 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-8 opacity-40;
}

.next {
  @apply control-button right-0 rounded-l-3xl;
}

.prev {
  @apply control-button left-0 rounded-r-3xl;
}
</style>
