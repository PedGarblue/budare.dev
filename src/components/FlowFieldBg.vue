<template>
  <canvas ref="flowbg" :height="height" :width="width"></canvas>
</template>

<script>
import colormap from 'colormap';
import { computed, ref, onMounted } from 'vue';
import { Particle } from '../animations/flowField';
export default {
  setup() {
    const prevSectionBgColors = colormap({
      colormap: 'inferno',
      nshades: 20,
      format: 'rgbaString',
      alpha: 1,
    });
    const bgParams = {
      colourRange: 'density',
      amp: 36,
      bgGradientColorA: 1,
      bgGradientColorB: 10,
    };
    const colors = colormap({
      colormap: bgParams.colourRange,
      nshades: bgParams.amp,
      format: 'rgbaString',
      alpha: 1,
    });
    const flowbg = ref('flowbg');

    let width = window.innerWidth;
    let height = window.innerHeight;

    const context = computed(() => {
      if (flowbg.value) {
        return flowbg.value.getContext('2d', { alpha: false });
      }
      return null;
    });

    let cw = width;
    let ch = height;
    let rid = null; // request animation id
    let particles = [];
    let flowField = [];

    function getAngle(x, y) {
      return ((Math.cos(x * 0.01) + Math.cos(y * 0.01)) * Math.PI) / 2;
    }

    function getFlowField(_flowfield, rows, cols) {
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x < cols; x++) {
          let index = x + y * cols;
          let a = getAngle(x * size, y * size);

          _flowfield[index] = a;
        }
      }
      return _flowfield;
    }

    let size = 15; //flow field cell size
    let rows = ~~(ch / size) + 2;
    let cols = ~~(cw / size) + 2;

    flowField = getFlowField(flowField, rows, cols);

    function Init() {
      function frame() {
        rid = requestAnimationFrame(frame);

        ctx.fillRect(0, 0, cw, ch);

        particles.map(p => {
          p.follow();
          p.update();
          p.show();
          p.edges();
        });
      }

      const ctx = context.value;

      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0.0, prevSectionBgColors[1]);
      bgGradient.addColorStop(0.5, prevSectionBgColors[10]);
      bgGradient.addColorStop(1, colors[bgParams.bgGradientColorB]);
      ctx.fillStyle = bgGradient;

      for (let i = 0; i < 1000; i++) {
        particles.push(new Particle(ctx, cw, ch, size, cols, flowField));
      }

      cw = flowbg.value.width = window.innerWidth;
      ch = flowbg.value.height = window.innerHeight;

      rows = ~~(ch / size) + 2;
      cols = ~~(cw / size) + 2;

      flowField = new Array(rows * cols);
      flowField = getFlowField(rows, cols);

      if (rid) {
        window.cancelAnimationFrame(rid);
        rid = null;
      }
      frame();
    }

    onMounted(() => {
      Init();
      window.addEventListener('resize', Init, false);
    });

    return {
      flowbg,
      width,
      height,
    };
  },
};
</script>
