import { math } from 'canvas-sketch-util';

export const drawSkewedRect = ({
  context,
  w = 600,
  h = 200,
  degrees = -45,
}) => {
  let angle, rx, ry;

  angle = math.degToRad(degrees);

  rx = Math.cos(angle) * w;
  ry = Math.sin(angle) * w;

  context.save();
  context.translate(rx * -0.5, (ry + h) * -0.5);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(rx, ry);
  context.lineTo(rx, ry + h);
  context.lineTo(0, h);
  context.closePath();
  context.stroke();

  context.restore();
};

export const drawPolygon = ({ context, radius = 100, sides = 3 }) => {
  const slice = (Math.PI * 2) / sides;

  context.beginPath();
  context.moveTo(0, -radius);

  Array(sides)
    .fill({})
    .forEach((item, index) => {
      let i = index + 1;
      const theta = i * slice - Math.PI * 0.5;

      context.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius);
    });

  context.closePath();
};
