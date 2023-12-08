function randomIntFromInterval(mn, mx) {
  return Math.floor(Math.random() * (mx - mn + 1) + mn);
}

export class Particle {
  constructor(context, canvasWidth, canvasHeight, size, cols, flowField) {
    this.ctx = context;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = size;
    this.cols = cols;
    this.flowField = flowField;

    this.pos = {
      x: Math.random() * this.canvasWidth,
      y: Math.random() * this.canvasHeight,
    };
    this.vel = { x: 0, y: 0 };
    this.base = (1 + Math.random()) * 3;
    this.life = randomIntFromInterval(5, 20);
    this.color =
      Math.random() < 0.1
        ? 'hsla(302, 100%, 28%, 0.7)'
        : 'hsla(219, 100%, 19%, 1)';
    this.history = [];
  }

  update() {
    this.history.push({ x: this.pos.x, y: this.pos.y });
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  show() {
    this.life--;
    this.ctx.beginPath();
    let last = this.history.length - 1;
    this.ctx.moveTo(this.history[last].x, this.history[last].y);
    for (let i = last; i > 0; i--) {
      this.ctx.lineTo(this.history[i].x, this.history[i].y);
    }
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    if (this.history.length > this.life) this.history.splice(0, 1);
  }

  edges() {
    if (
      this.pos.x > this.canvasWidth ||
      this.pos.x < 0 ||
      this.pos.y > this.canvasHeight ||
      this.pos.y < 0
    ) {
      this.pos.y = Math.random() * this.canvasHeight;
      this.pos.x = Math.random() * this.canvasWidth;
      this.history.length = 0;
    }
    if (this.life <= 0) {
      this.pos.y = Math.random() * this.canvasHeight;
      this.pos.x = Math.random() * this.canvasWidth;
      this.life = randomIntFromInterval(5, 20);
      this.history.length = 0;
    }
  }

  follow() {
    let x = ~~(this.pos.x / this.size);
    let y = ~~(this.pos.y / this.size);
    let index = x + y * this.cols;

    let angle = this.flowField[index];

    this.vel.x = this.base * Math.cos(angle) * 0.5;
    this.vel.y = this.base * Math.sin(angle) * 0.5;
  }
}
