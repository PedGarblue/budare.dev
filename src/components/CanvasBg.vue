<!-- eslint-disable vue/no-ref-as-operand -->
<!-- eslint-disable vue/no-ref-as-operand -->
<template>
  <canvas
    ref="canvasbg"
    :height="height"
    :width="width"
    class="absolute z-0 top-0 right-0"
  ></canvas>
</template>

<script setup>
import { computed, ref } from 'vue';
import colormap from 'colormap';
import { TheGrid } from '../grid/grid';
import { useAnimation } from '../composables/useAnimation';

const props = defineProps({
  width: Number,
  height: Number,
});

const canvasbg = ref('canvasbg');
const context = computed(() => canvasbg.value.getContext('2d', { alpha: false }));

const bgParams = {
  colourRange: 'inferno',
  amp: 20,
  bgGradientColorA: 1,
  bgGradientColorB: 10,
};

let width = props.width | window.innerWidth;
let height = props.height | window.innerHeight;

// global params
let frame = 0;

const draw = () => {
  let ctx = context.value;
  // setup colors
  const colors = colormap({
    colormap: bgParams.colourRange,
    nshades: bgParams.amp,
    format: 'rgbaString',
    alpha: 1,
  });

  // background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, width * 0.6, 0);
  bgGradient.addColorStop(0, colors[bgParams.bgGradientColorA]);
  bgGradient.addColorStop(1, colors[bgParams.bgGradientColorB]);
  ctx.fillStyle = bgGradient;
  // main rect
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.restore();
};

const isMobileView = () => {
  return window.innerWidth < 768;
};

const cols = isMobileView() ? 5 : 9;
const rows = isMobileView() ? 50 : 100;

const grid1 = new TheGrid({
  width,
  height,
  cols,
  rows,
  xOffset: isMobileView() ? 0.2 : 0.35,
  yOffset: isMobileView() ? 0.15 : 0.087,
  gridSize: isMobileView() ? 0.8 : 0.8,
  xlastThird: 500,
  ylastThird: 350,
  xLastFormula: 'second',
  yLastFormula: 'second',
  freq: 0.0012,
  amp: 31,
  animSpeed: -1,
  colourRange: 'magma',
  colourAlpha: 1,
  shadowOffsetX: 20,
  shadowOffsetY: 30,
});

grid1.setupCalcs({ name: 'grid1' });

const animationCallback = () => {
  draw();
  grid1.draw({ context: context.value, frame });
  frame++;
  return window.requestAnimationFrame(init);
};

const { init } = useAnimation({
  animationElement: canvasbg,
  animationCallback,
  framerate: 60,
});

</script>

<style></style>
