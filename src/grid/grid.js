const createColormap = require('colormap');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
import { getFormula } from '@/grid/formulas';
import Point from './point';

export class TheGrid {
  constructor({
    height,
    width,
    cols,
    rows,
    xOffset,
    yOffset,
    gridSize,
    xlastThird,
    ylastThird,
    xLastFormula,
    yLastFormula,
    freq,
    amp,
    animSpeed,
    colourRange,
    colourAlpha,
    shadowOffsetX,
    shadowOffsetY,
  }) {
    this.params = {
      cols,
      rows,
      xOffset,
      yOffset,
      gridSize,
      xlastThird,
      ylastThird,
      xLastFormula,
      yLastFormula,
      freq,
      amp,
      animSpeed,
      colourRange,
      colourAlpha,
    };
    // controllable
    this.cols = cols;
    this.rows = rows;

    this.xOffset = xOffset;
    this.yOffset = yOffset;

    this.gridSize = gridSize;

    this.xlastThird = xlastThird;
    this.ylastThird = ylastThird;
    this.xLastFormula = xLastFormula;
    this.yLastFormula = yLastFormula;

    this.freq = freq;
    this.amp = amp;

    this.animSpeed = animSpeed;

    this.colourRange = colourRange;
    this.colourAlpha = colourAlpha;

    this.shadowOffsetX = shadowOffsetX;
    this.shadowOffsetY = shadowOffsetY;

    // private

    this.height = height;
    this.width = width;

    this.points = [];

    this.gridWidth;
    this.gridHeight;

    this.cellWidth;
    this.cellHeight;

    this.marginX;
    this.marginY;

    this.colors;

    this.colormapOptions = [
      'magma',
      'jet',
      'hsv',
      'hot',
      'cool',
      'spring',
      'summer',
      'autumn',
      'winter',
      'bone',
      'copper',
      'greys',
      'inferno',
      'electric',
      'blackbody',
      'portland',
      'YIGnBu',
    ];

    // this.setupCalcs()
  }

  setupCalcs() {
    // rewrite params
    this.cols = this.params.cols;
    this.rows = this.params.rows;
    this.xOffset = this.params.xOffset;
    this.yOffset = this.params.yOffset;
    this.gridSize = this.params.gridSize;
    this.xlastThird = this.params.xlastThird;
    this.ylastThird = this.params.ylastThird;
    this.xLastFormula = this.params.xLastFormula;
    this.yLastFormula = this.params.yLastFormula;
    this.freq = this.params.freq;
    this.amp = this.params.amp;
    this.animSpeed = this.params.animSpeed;
    this.colourRange = this.params.colourRange;
    this.colourAlpha = this.params.colourAlpha;

    this.gridWidth = this.width * this.gridSize;
    this.gridHeight = this.height * this.gridSize;

    this.cellWidth = this.gridWidth / this.cols;
    this.cellHeight = this.gridHeight / this.rows;

    this.marginX = this.xOffset * this.width;
    this.marginY = this.yOffset * this.width;

    this.colors = createColormap({
      colormap: this.colourRange,
      nshades: this.amp,
      format: 'rgbaString',
      alpha: this.colourAlpha,
    });

    const numCells = this.cols * this.rows;

    this.points = [];
    for (let i = 0; i < numCells; i++) {
      let x, y, n, lineWidth, color;
      x = (i % this.cols) * this.cellWidth;
      y = Math.floor(i / this.cols) * this.cellHeight;

      n = random.noise2D(x, y, this.freq, this.amp);

      lineWidth = math.mapRange(n, -this.amp, this.amp, 0, 5);

      color = this.colors[
        Math.floor(math.mapRange(n, -this.amp, this.amp, 0, this.amp))
      ];

      this.points.push(new Point({ x, y, lineWidth, color }));
    }
  }

  draw({ context, frame }) {
    context.save();
    context.fillRect(0, 0, this.width, this.height);
    context.translate(this.marginX, this.marginY);
    context.translate(this.cellWidth * 0.5, this.cellHeight * 0.5);

    this.points.forEach(point => {
      const animInc = frame * this.animSpeed;
      let n = random.noise2D(
        point.initialX + animInc,
        point.initialY,
        this.freq,
        this.amp
      );

      point.x = point.initialX + n;
      point.y = point.initialY + n;
    });

    let lastx, lasty;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols - 1; c++) {
        let shadowColor;
        const curri = r * this.cols + c + 0;
        const nexti = r * this.cols + c + 1;
        const curr = this.points[curri];
        const next = this.points[nexti];

        const mx = curr.x + (next.x - curr.x) * 0;
        const my = curr.y + (next.y - curr.y) * 0;

        if (!c) {
          lastx = curr.x;
          lasty = curr.y;
        }

        context.beginPath();
        context.lineWidth = curr.lineWidth;
        context.strokeStyle = curr.color;
        context.moveTo(lastx, lasty);
        context.quadraticCurveTo(curr.x, curr.y, mx, my);

        context.stroke();

        shadowColor = curr.color;

        context.shadowColor = shadowColor;
        context.shadowOffsetX = this.shadowOffsetX;
        context.shadowOffsetY = this.shadowOffsetY;
        context.globalCompositeOperation = 'source-over';

        lastx = getFormula(this.xLastFormula, {
          a: mx,
          b: c,
          c: this.cols,
          d: this.xlastThird,
        });
        lasty = getFormula(this.yLastFormula, {
          a: my,
          b: r,
          c: this.rows,
          d: this.ylastThird,
        });
      }
    }
    context.restore();
  }
}
