import { DEFAULT_VISION_WIDTH } from "../consts";
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

export function drawCone(
  v: Vector,
  distance: number,
  angle: number,
  context: CanvasRenderingContext2D,
  c: string
) {
  context.beginPath();
  context.moveTo(v.x, v.y);
  context.arc(
    v.x,
    v.y,
    distance,
    2 * Math.PI + angle - DEFAULT_VISION_WIDTH,
    2 * Math.PI + angle + DEFAULT_VISION_WIDTH
  );
  context.fillStyle = "rgba(255, 255, 255, 0.5)";
  context.fill();
}
