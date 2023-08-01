const risoColors = require('riso-colors');
const { random, color } = require('canvas-sketch-util');
const { drawSkewedRect } = require('./draws');

export class TheSkew {
  constructor() {
    this.seed = random.getRandomSeed();
  }

  setupCalcs() {}

  draw({ context, width, height }) {
    // todo: move to setupCalcs
    random.setSeed(this.seed);
    const num = 40;

    const rectColors = [
      random.pick(risoColors),
      random.pick(risoColors),
      random.pick(risoColors),
    ];

    const bgColor = random.pick(risoColors).hex;

    const mask = {
      radius: width * 0.4,
      side: 3,
      x: width * 0.5,
      y: height * 0.5,
    };

    const rects = Array(num)
      .fill({})
      .map(() => {
        return {
          x: random.range(0, width),
          y: random.range(0, height),
          w: random.range(200, 600),
          h: random.range(40, 200),
          fill: random.pick(rectColors).hex,
          stroke: random.pick(rectColors).hex,
          blend: random.value() > 0.5 ? 'overlay' : 'source-over',
        };
      });

    // this is the actual draw function
    context.fillStyle = bgColor;
    context.fillRect(0, 0, width, height);

    context.save();
    context.translate(mask.x, mask.y);

    rects.forEach(rect => {
      const { x, y, fill, stroke, blend } = rect;
      let shadowColor;

      context.save();
      context.translate(-mask.x, -mask.y);
      context.translate(x, y);
      context.strokeStyle = stroke;
      context.fillStyle = fill;
      context.lineWidth = 10;

      context.globalCompositeOperation = blend;

      drawSkewedRect({ context, ...rect });

      shadowColor = color.offsetHSL(fill, 0, 0, -20);
      shadowColor.rgba[3] = 0.5;

      context.shadowColor = color.style(shadowColor.rgba);
      context.shadowOffsetX = 10;
      context.shadowOffsetY = 20;

      context.fill();

      context.shadowColor = null;
      context.stroke();

      context.globalCompositeOperation = 'source-over';

      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();

      context.restore();
    });

    context.restore();

    context.save();
    context.translate(mask.x, mask.y);

    context.restore();
  }
}
