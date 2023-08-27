<template>
  <canvas
    ref="skewbg"
    :height="height"
    :width="width"
    class="absolute z-negative top-0 right-0"
  ></canvas>
</template>

<script>
import colormap from 'colormap';
import { computed, onMounted, ref } from 'vue';
import { TheSkew } from '../skew/the-skew';

export default {
  setup() {
    const skewbg = ref('skewbg');
    const context = computed(() => skewbg.value.getContext('2d'));
    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const skew1 = new TheSkew({ height, width });
    skew1.setupCalcs();

    const init = () => {
      const ctx = context.value;
      const colors = colormap({
        colormap: 'density',
        nshades: 36,
        format: 'rgbaString',
        alpha: 1,
      });
      const prevSectionBgColors = colormap({
        colormap: 'inferno',
        nshades: 100,
        format: 'rgbaString',
        alpha: 1,
      });

      // background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0.0, prevSectionBgColors[1]);
      bgGradient.addColorStop(0.50, prevSectionBgColors[10]);
      bgGradient.addColorStop(1, colors[10]);
      ctx.fillStyle = bgGradient;

      skew1.draw({ context: context.value, frame });

      frame++;

      window.requestAnimationFrame(init);
    };

    onMounted(() => {
      init();
    });

    return {
      skewbg,
      width,
      height,
    };
  },
};
</script>
