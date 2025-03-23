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
      xBoundaryMatcher: rect => rect.x < -rect.perimetalLength / 2,
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
      xBoundaryMatcher: (rect, width) =>
        rect.x > width + rect.perimetalLength / 2,
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
          // 'color', difference', 'overlay' and 'multiply makes the canvas EXTREMELY slow
          blend: 'screen',
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
    context.lineWidth = 10;
    
    for (let i = 0; i < this.rects.length; i++) {
        const rect = this.rects[i];
        
        // Update position calculations
        if (this.xBoundaryMatcher(rect, width) || rect.y > height + rect.perimetalHeight / 2) {
            rect.x = rect.originX;
            rect.y = rect.originY;
        } else {
            rect.x += this.animXDirectionRatio * this.animVelocity;
            rect.y += this.animYDirectionRatio * this.animVelocity;
        }

        // Minimize state changes
        context.fillStyle = rect.fill;
        context.strokeStyle = rect.stroke;
        context.globalCompositeOperation = rect.blend;
        
        // Single transform instead of save/restore for each rect
        context.setTransform(1, 0, 0, 1, rect.x, rect.y);
        
        // Draw main shape
        drawSkewedRect({ context, ...rect });
        context.fill();
        
        // Single stroke operation instead of multiple
        context.stroke();
    }
    
    context.restore();
  }
}
