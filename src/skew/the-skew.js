import risoColors from 'riso-colors';
import { random, color } from 'canvas-sketch-util';
import { drawSkewedRect } from './draws';

const getConfigsByDirection = direction => {
  let angle;
  switch (direction) {
  case 'from-tr-to-bl':
    angle = Math.PI / 4; // -45 degrees
    return {
      angle,
      animXDirectionRatio: -Math.cos(angle),
      animYDirectionRatio: Math.sin(angle),
      rect: {
        degrees: -45,
      },
      xBoundaryMatcher: (rect) => rect.x < -rect.perimetalLength / 2,
    };
  case 'from-tl-to-br':
    angle = Math.PI / 4; // 45 degrees
    return {
      angle,
      animXDirectionRatio: Math.cos(angle),
      animYDirectionRatio: Math.sin(angle),
      rect: {
        degrees: 45,
      },
      xBoundaryMatcher: (rect, width) => rect.x > width + rect.perimetalLength / 2,
    };
  }
};
export class TheSkew {
  constructor({ width, height, num = 20, direction = 'from-tr-to-bl' }) {
    const animsConfigs = getConfigsByDirection(direction);
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
    this.animAngle = animsConfigs.angle;
    this.animXDirectionRatio = animsConfigs.animXDirectionRatio;
    this.animYDirectionRatio = animsConfigs.animYDirectionRatio;
    this.xBoundaryMatcher = animsConfigs.xBoundaryMatcher;
    this.rectDegrees = animsConfigs.rect.degrees;
    this.shadowOffsetX = 10;
    this.shadowOffsetY = 20;
    this.direction = direction;
    this.animVelocity = 1;
  }

  setupCalcs() {
    const { width, height, num, seed, rectColors } = this;
    random.setSeed(seed);

    this.rects = Array(num)
      .fill({})
      .map(() => {
        const initialX = random.range(0, width);
        const initialY = random.range(0, height);
        const w = random.range(300, 900);
        const h = random.range(60, 300);
        const perimetalLength = w / Math.sqrt(2);
        const perimetalHeight = perimetalLength + h;
        // Calculate the distance from the initial point to the canvas boundary along the 45-degree line
        const distance = Math.min(
          (initialX + width - perimetalLength / 2) / Math.cos(this.animAngle),
          (initialY + perimetalHeight / 2) / Math.sin(this.animAngle)
        );

        // Calculate the originX and originY based on the angle and distance
        // const originX = initialX + distance * -Math.cos(this.animAngle);
        const originX = initialX + distance * -this.animXDirectionRatio;
        const originY = initialY - distance * this.animYDirectionRatio;

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
          blend: 'overlay',
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
      let shadowColor, posX, posY;

      // match rect when it reaches the bottom-left corner
      // take in count the rect's width and height since the rect is skewed
      // and the position is in the center of the rect
      // ...
      // Check if the rect has gone out of bounds (width or height)
      if (
        this.xBoundaryMatcher(rect, width) ||
        rect.y > height + rect.perimetalHeight / 2
      ) {
        posX = rect.originX;
        posY = rect.originY;
      } else {
        // move rect in a 45-degree line pointing to the bottom-left corner
        posX = rect.x + this.animXDirectionRatio * this.animVelocity;
        posY = rect.y + this.animYDirectionRatio * this.animVelocity;
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
      context.restore();

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
      // context.restore();

      // context.restore();


      return rect;
    });

    context.restore();
  }
}
