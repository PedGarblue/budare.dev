import risoColors from 'riso-colors';
import { random, color } from 'canvas-sketch-util';
import { drawSkewedRect } from './draws';

export class TheSkew {
  constructor({ width, height, num = 25 }) {
    this.width = width;
    this.height = height;
    this.seed = random.getRandomSeed();
    this.bgColor = random.pick(risoColors).hex;
    this.num = num;
    this.rectColors = [
      random.pick(risoColors),
      random.pick(risoColors),
      random.pick(risoColors),
    ];
    this.rects = Array(this.num);
    this.animAngle = Math.PI / 4; // 45 degrees
    this.rectDegrees = -45;
    this.shadowOffsetX = 10;
    this.shadowOffsetY = 20;
    console.log([this.width, this.height, this.num, this.seed]);
  }

  setupCalcs() {
    const { width, height, num, seed, rectColors } = this;
    random.setSeed(seed);

    this.rects = Array(num)
      .fill({})
      .map(() => {
        const initialX = random.range(0, width);
        const initialY = random.range(0, height);
        const w = random.range(200, 600);
        const h = random.range(40, 200);
        const perimetalLength = w / Math.sqrt(2);
        const perimetalHeight = perimetalLength + h;
        // Calculate the distance from the initial point to the canvas boundary along the 45-degree line
        const distance = Math.min(
          (width + perimetalLength / 2 - initialX) / Math.cos(this.animAngle),
          (initialY + (perimetalHeight + this.shadowOffsetY + 10) / 2) /
            Math.sin(this.animAngle)
        );

        // Calculate the originX and originY based on the angle and distance
        const originX = initialX + distance * Math.cos(this.animAngle);
        const originY = initialY - distance * Math.sin(this.animAngle);

        return {
          initialX,
          initialY,
          originX,
          originY,
          x: initialX,
          y: initialY,
          w,
          h,
          perimetalLength,
          perimetalHeight,
          fill: random.pick(rectColors).hex,
          stroke: random.pick(rectColors).hex,
          blend: random.value() > 0.5 ? 'overlay' : 'source-over',
          degrees: this.rectDegrees,
        };
      });
  }

  draw({ context }) {
    const width = this.width;
    const height = this.height;
    // this is the actual draw function
    context.fillRect(0, 0, width, height);

    context.save();

    this.rects = this.rects.map(rect => {
      // const animInc = 1;
      const { fill, stroke, blend } = rect;
      let shadowColor;

      // move rect in a 45-degree line pointing to the bottom-left corner
      let posX = rect.x - Math.cos(this.animAngle);
      let posY = rect.y + Math.sin(this.animAngle);

      // match rect when it reaches the bottom-left corner
      // take in count the rect's width and height since the rect is skewed
      // and the position is in the center of the rect
      // ...
      // Check if the rect has gone out of bounds (width or height)
      if (
        posX < -rect.perimetalLength / 2 ||
        posX > width + rect.w / 2 ||
        posY > height + rect.perimetalHeight / 2
      ) {
        posX = rect.originX;
        posY = rect.originY;
      }

      rect.x = posX;
      rect.y = posY;

      context.save();
      context.translate(rect.x, rect.y);
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

      // context.restore();
      // context.fillRect(rect.x, rect.y, 5, 5);
      // context.fillStyle = 'black';
      // context.restore();

      // context.save();
      // context.beginPath();
      // context.moveTo(rect.x, rect.y);
      // context.lineTo(rect.originX, rect.originY);
      // context.closePath();
      // context.strokeStyle = 'black';
      // context.lineWidth = 2;
      // context.stroke();
      // context.restore();

      // context.save();
      // context.beginPath();
      // context.moveTo(rect.x, rect.y);
      // context.lineTo(rect.x, rect.y - rect.perimetalHeight / 2);
      // context.closePath();
      // context.strokeStyle = 'black';
      // context.lineWidth = 2;
      // context.stroke();
      context.restore();

      return rect;
    });

    context.restore();

    context.save();

    context.restore();
  }
}
