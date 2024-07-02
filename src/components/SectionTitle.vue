<template>
  <div
    class="
            separator
            flex
            w-full
            h-20
            text-gray-100
            text-center
            items-center justify-center
            text-2xl
            font-medium
            tracking-wider
        "
    :style="{ background: `linear-gradient(${gradient})` }"
  >
    {{ title }}
  </div>
</template>

<script setup>

defineProps({
  title: String,
  gradient: {
    type: String,
    default: '103deg, rgb(20 7 39) 0%, rgb(106 31 63) 35%, rgb(173 51 82) 62%, rgba(75, 18, 35, 1) 100%',
  },
});
</script>

<style lang="postcss" scoped>
.separator {
  @apply shadow-lg;
  font-family: 'Montserrat Alternates', sans-serif;
  background: rgb(36, 11, 35);
}
</style>
