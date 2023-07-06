<!-- eslint-disable vue/no-ref-as-operand -->
<!-- eslint-disable vue/no-ref-as-operand -->
<template>
  <canvas
    ref="canvasbg"
    :height="height"
    :width="width"
    class="fixed z-0 bottom-0 right-0"
  ></canvas>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import math from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';
import colormap from 'colormap';
import Point from '@/grid/point';
import { getFormula } from '@/grid/formulas';

export default {
  name: 'CanvasBg',
  setup() {
    const canvasbg = ref('canvasbg');
    const context = computed(() => canvasbg.value.getContext('2d'));

    const params = {
      cols: 9,
      rows: 100,
      xOffset: 0.4,
      yOffset: 0.027,
      gridSize: 0.8,
      xlastThird: 500,
      ylastThird: 350,
      xLastFormula: 'second',
      yLastFormula: 'second',
      freq: 0.0012,
      amp: 31,
      animSpeed: -1,
      bgColourA: 1,
      bgColourB: 10,
      colourRange: 'YIGnBu',
      colourAlpha: 1,
    };

    let width = window.innerWidth;
    let height = window.innerHeight;

    // global params
    let frame = 0;
    let marginX,
      marginY,
      cols,
      rows,
      cellWidth,
      cellHeight,
      points,
      frequency,
      amplitude;

    const setupSketch = () => {
      // grid layout
      cols = params.cols;
      rows = params.rows;
      let numCells = cols * rows;

      // grid dimensions
      const gridWidth = width * params.gridSize;
      const gridHeight = height * params.gridSize;

      // cell dimensions
      cellWidth = gridWidth / cols;
      cellHeight = gridHeight / rows;

      // margins
      marginX = params.xOffset * width;
      marginY = params.yOffset * width;

      points = [];

      let x, y, n, lineWidth, color;
      frequency = params.freq;
      amplitude = params.amp;

      const colors = colormap({
        colormap: params.colourRange,
        nshades: amplitude,
        format: 'rgbaString',
        alpha: params.colourAlpha,
      });

      for (let i = 0; i < numCells; i++) {
        x = (i % cols) * cellWidth;
        y = Math.floor(i / cols) * cellHeight;

        n = random.noise2D(x, y, frequency, amplitude);

        lineWidth = math.mapRange(n, -amplitude, amplitude, 0, 5);

        color =
          colors[
            Math.floor(math.mapRange(n, -amplitude, amplitude, 0, amplitude))
          ];

        points.push(new Point({ x, y, lineWidth, color }));
      }
    };

    const draw = () => {
      let ctx = context.value;
      // setup colors
      const colors = colormap({
        colormap: params.colourRange,
        nshades: params.amp,
        format: 'rgbaString',
        alpha: params.colourAlpha,
      });

      // background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width * 0.6, 0);
      bgGradient.addColorStop(0, colors[params.bgColourA]);
      bgGradient.addColorStop(1, colors[params.bgColourB]);
      ctx.fillStyle = bgGradient;
      // main rect
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(marginX, marginY);
      ctx.translate(cellWidth * 0.5, cellHeight * 0.5);

      points.forEach(point => {
        const animInc = frame * params.animSpeed;
        let n = random.noise2D(
          point.initialX + animInc,
          point.initialY,
          frequency,
          amplitude
        );

        point.x = point.initialX + n;
        point.y = point.initialY + n;
      });

      let lastx, lasty;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const curr = points[r * cols + c + 0];
          const next = points[r * cols + c + 1];

          // if(!c) ctx.moveTo(point.x, point.y)
          // else ctx.lineTo(point.x, point.y)

          const mx = curr.x + (next.x - curr.x) * 0;
          const my = curr.y + (next.y - curr.y) * 0;

          if (!c) {
            lastx = curr.x;
            lasty = curr.y;
          }
          ctx.beginPath();
          ctx.lineWidth = curr.lineWidth;
          ctx.strokeStyle = curr.color;
          // fills the line to the first point
          // if (c === 0) ctx.moveTo(curr.lastx, curr.lasty)
          //else if (index === points.length - 2) ctx.quadraticCurveTo(curr.x, curr.y, next.x, next.y)
          // fills the line to the last point
          // else ctx.quadraticCurveTo(curr.x, curr.y, mx, my)
          // conte
          ctx.moveTo(lastx, lasty);
          ctx.quadraticCurveTo(curr.x, curr.y, mx, my);
          ctx.stroke();

          lastx = getFormula(params.xLastFormula, {
            a: mx,
            b: c,
            c: cols,
            d: params.xlastThird,
          });
          // lasty = my * (r / rows) + params.ylastThird;
          lasty = getFormula(params.yLastFormula, {
            a: my,
            b: r,
            c: rows,
            d: params.ylastThird,
          });
        }
      }

      ctx.restore();
      frame++;
    };

    const init = () => {
      setupSketch();
      draw();
      window.requestAnimationFrame(init);
    };

    onMounted(() => {
      init();
    });

    return {
      canvasbg,
      width,
      height,
    };
  },
};
</script>

<style></style>
