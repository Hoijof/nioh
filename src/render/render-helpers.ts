import Vector from "../models/vector";

export function drawDot(
  v: Vector,
  r: number,
  c: string,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.arc(v.x, v.y, r, 0, 2 * Math.PI);
  context.fillStyle = c;
  context.fill();
}
