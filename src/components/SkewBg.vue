<template>
  <canvas ref="skewbg" :height="height" :width="width" class="absolute z-negative top-0 right-0"></canvas>
</template>

<script setup>
import colormap from 'colormap';
import { computed, onUnmounted, ref } from 'vue';
import { TheSkew } from '../skew/the-skew';
import { useAnimation } from '../composables/useAnimation';
import { useScreenData } from '../composables/useScreenData';

const skewbg = ref('skewbg');

const props = defineProps({
  animationDirection: {
    type: String,
    default: 'from-tr-to-bl',
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
})

const context = computed(() => skewbg.value.getContext('2d', { alpha: false }));
let frame = 0;
let width = props.width || window.innerWidth;
let height = props.height || window.innerHeight;
const { getViewType } = useScreenData();

const squareCountByView = {
  mobile: 0,
  lg: 7,
  xl: 10,
  '2xl': 20,
}
const num = squareCountByView[getViewType()];

const skew1 = new TheSkew({
  height,
  width,
  direction: props.animationDirection,
  num,
});

skew1.setupCalcs();

const colors = colormap({
  colormap: 'inferno',
  nshades: 20,
  format: 'rgbaString',
  alpha: 1,
});
const prevSectionBgColors = colormap({
  colormap: 'inferno',
  nshades: 20,
  format: 'rgbaString',
  alpha: 1,
});

const renderedBg = ref(false);

// Cache gradient creation
const createBgGradient = (ctx) => {
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0.0, prevSectionBgColors[1]);
    bgGradient.addColorStop(0.5, prevSectionBgColors[10]);
    bgGradient.addColorStop(1, colors[10]);
    return bgGradient;
}

// Use requestAnimationFrame directly for better control
let cachedGradient;
function animationCallback() {
    const ctx = context.value;
    
    if (!cachedGradient) {
        cachedGradient = createBgGradient(ctx);
        ctx.fillStyle = cachedGradient;
    }
    
    ctx.fillRect(0, 0, width, height);
    skew1.draw({ context: ctx, frame });
    frame++;
}

const { animationFrameId } = useAnimation({
  animationElement: skewbg,
  animationCallback,
  framerate: 21,
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId.value);
})
</script>
