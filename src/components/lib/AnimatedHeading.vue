<template>
    <component :is="headingType">
        <span
            :style="`--content: '${text}'; --start-color: ${
            startColor
            }; --end-color: ${endColor};`"
            class="animated-text-bg drop-shadow-xl text-4xl xl:text-8xl 2xl:text-8xl block font-black uppercase"
        >
            <span class="animated-text-fg ">{{ text }}</span>
        </span>
    </component>
</template>

<script setup>
const props = defineProps({
    headingType: String,
    startColor: String,
    endColor: String,
    text: String,
});
</script>

<style lang="postcss" scoped>
.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.gray.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: 0.05em;
  padding-right: 0.05em;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.gray.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: 0.05em;
    padding-right: 0.05em;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 0.05em;
  padding-right: 0.05em;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 1;
  z-index: 1;
}

</style>
