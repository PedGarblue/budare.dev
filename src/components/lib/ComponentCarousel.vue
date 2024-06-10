<script setup>
import { ref } from 'vue';

const currentIndex = ref(0);

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const nextComponent = () => {
  if (currentIndex.value < totalItems.value - 1) {
    currentIndex.value += 1;
  }
};

const totalItems = ref(0);
const updateTotalItems = count => {
  totalItems.value = count;
};

// eslint-disable-next-line no-undef
defineExpose({ updateTotalItems });
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <slot></slot>
    </div>
    <button
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
      @click.prevent="prev()"
    >
      &lt;
    </button>
    <button
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
      @click="nextComponent"
      @tap="nextComponent"
    >
      &gt;
    </button>
  </div>
</template>

<style lang="postcss" scoped></style>
