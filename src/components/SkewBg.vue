<template>
  <canvas
    ref="skewbg"
    :height="height"
    :width="width"
    class="absolute z-negative top-0 right-0"
  ></canvas>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { TheSkew } from '../skew/the-skew';

export default {
  setup() {
    const skewbg = ref('skewbg');
    const context = computed(() => skewbg.value.getContext('2d'));
    // let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const skew1 = new TheSkew();
    const init = () => {
      skew1.draw({ context: context.value, width, height });
      // frame++;
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
