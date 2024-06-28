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
import { computed, ref } from 'vue';
import { TheSkew } from '../skew/the-skew';
import useBackgroundAnimation from '@/composables/useBackgroundAnimation';
import { useAnimation } from '../composables/useAnimation';

export default {
  props: {
    animationDirection: {
      type: String,
      default: 'from-tr-to-bl',
    },
  },
  setup(props) {
    const skewbg = ref('skewbg');
    const context = computed(() => skewbg.value.getContext('2d', { alpha: false }));
    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const { isMobileView } = useBackgroundAnimation();

    const num = isMobileView ? 0 : 20;

    const skew1 = new TheSkew({
      height,
      width,
      direction: props.animationDirection,
      num,
    });

    skew1.setupCalcs();

    function animationCallback() {
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
        bgGradient.addColorStop(0.5, prevSectionBgColors[10]);
        bgGradient.addColorStop(1, colors[10]);
        ctx.fillStyle = bgGradient;

        skew1.draw({ context: context.value, frame });

        frame++;
    }

    const { init } = useAnimation({
      animationElement: skewbg,
      animationCallback,
      framerate: 20,
    })

    return {
      skewbg,
      width,
      height,
    };
  },
};
</script>
