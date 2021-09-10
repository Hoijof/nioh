import Food from "./models/food";
import Nioh from "./models/nioh";
import Vector from "./models/vector";
import Canvas from "./render/canvas";
import { drawCone, drawDot } from "./render/render-helpers";

const niohs: Set<Nioh> = new Set();
const food: Set<Food> = new Set();

//#region Niohs
export function generateNiohs(size: number) {
  for (let i = 0; i < size; i++) {
    niohs.add(new Nioh(Math.random() * 2000, Math.random() * 2000));
  }
}

function drawNiohs(context: CanvasRenderingContext2D) {
  niohs.forEach((nioh) => {
    drawDot(nioh.position, 5, "white", context);
    drawCone(nioh.position, nioh.visionRange, nioh.rotation, context, "white");
  });
}

export function setTarget(v: Vector) {
  niohs.forEach((nioh) => {
    nioh.setTarget(v);
  });
}

//#endregion

//#region Food
export function addFood(v: Vector) {
  food.add(new Food(v));
}

function drawFood(context: CanvasRenderingContext2D) {
  food.forEach((f) => {
    drawDot(f.position, 2, "yellow", context);
  });
}

//#endregion

export function drawEntities(context: CanvasRenderingContext2D) {
  drawNiohs(context);
  drawFood(context);
}

export function tick(delta: number, canvas: Canvas) {
  niohs.forEach((nioh) => {
    nioh.tick(delta);
  });

  niohs.forEach((nioh) => {
    if (nioh.shouldDelete) {
      niohs.delete(nioh);
    }
  });
}
