export default class Point {
  constructor({ x, y, lineWidth, color }) {
    this.x = x;
    this.y = y;
    this.lineWidth = lineWidth;
    this.color = color;
    // this.control = control
    this.initialX = x;
    this.initialY = y;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = 'red';

    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2);
    context.fill();

    context.restore();
  }

  hitTest(x, y) {
    const dx = this.x - x;
    const dy = this.y - y;
    const dd = Math.sqrt(dx * dx + dy * dy);

    return dd < 20;
  }
}
