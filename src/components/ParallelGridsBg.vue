<template>
  <canvas
    ref="dualgridbg"
    :height="height"
    :width="width"
    class="absolute z-negative top-0 right-0"
  ></canvas>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import colormap from 'colormap';
import useBackgroundAnimation from '@/composables/useBackgroundAnimation';
import { TheGrid } from '../grid/grid';

export default {
  setup() {
    const { isMobileView } = useBackgroundAnimation();
    const dualgridbg = ref('dualgridbg');
    const context = computed(() => dualgridbg.value.getContext('2d'));

    const bgParams = {
      colourRange: 'density',
      amp: 36,
      bgGradientColorA: 1,
      bgGradientColorB: 10,
    };

    let width = window.innerWidth;
    let height = window.innerHeight;

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
      const prevSectionBgColors = colormap({
        colormap: 'inferno',
        nshades: 20,
        format: 'rgbaString',
        alpha: 1,
      });

      // background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0.0, prevSectionBgColors[1]);
      bgGradient.addColorStop(0.50, prevSectionBgColors[10]);
      bgGradient.addColorStop(1, colors[bgParams.bgGradientColorB]);
      ctx.fillStyle = bgGradient;
      // main rect
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.restore();
    };

    const rows = isMobileView ? 3 : 6;
    const cols = isMobileView ? 50 : 100;
    const gridWidth = isMobileView ? 400 : 1080;
    const gridHeight = isMobileView ? 400 : 1080;

    const grid1 = new TheGrid({
      width: gridWidth,
      height: gridHeight,
      cols,
      rows,
      xOffset: 1.3,
      yOffset: -0.05,
      gridSize: 1,
      xlastThird: 250,
      ylastThird: 500,
      xLastFormula: 'second',
      yLastFormula: 'second',
      freq: 0.0012,
      amp: 25,
      animSpeed: -1,
      colourRange: 'YIOrRd',
      colourAlpha: 1,
      shadowOffsetX: 20,
      shadowOffsetY: 15,
    });

    const grid2 = new TheGrid({
      width: gridWidth,
      height: gridHeight,
      cols,
      rows,
      xOffset: -0.53,
      yOffset: 0.0,
      gridSize: 1,
      xlastThird: -250,
      ylastThird: 500,
      xLastFormula: 'second',
      yLastFormula: 'second',
      freq: 0.0012,
      amp: 25,
      animSpeed: -1,
      colourRange: 'YIOrRd',
      colourAlpha: 1,
      shadowOffsetX: -20,
      shadowOffsetY: 15,
    });

    grid1.setupCalcs({ name: 'grid1' });
    grid2.setupCalcs({ name: 'grid2' });
    const init = () => {
      draw();
      if (!isMobileView) {
        grid1.draw({ context: context.value, frame, colorByRow: true });
        grid2.draw({ context: context.value, frame, colorByRow: true });
      }
      frame++;
      window.requestAnimationFrame(init);
    };

    onMounted(() => {
      init();
    });

    return {
      dualgridbg,
      width,
      height,
    };
  },
};
</script>

<style lang="postcss" scoped>
.-z-1 {
  z-index: -1;
}
</style>
