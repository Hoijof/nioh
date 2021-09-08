import Food from "./models/food";
import Nioh from "./models/nioh";
import Vector from "./models/vector";
import Canvas from "./render/canvas";
import { drawDot } from "./render/render-helpers";

const niohs: Set<Nioh> = new Set();
const food: Set<Food> = new Set();

//#region Niohs
export function generateNiohs(size: number) {
  for (let i = 0; i < size; i++) {
    niohs.add(new Nioh(Math.random() * 100, Math.random() * 100));
  }
}

function drawNiohs(context: CanvasRenderingContext2D) {
  niohs.forEach((nioh) => {
    drawDot(nioh.position, 5, "white", context);
  });
}

//#endregion

//#region Food
export function addFood(v: Vector) {
  food.add(new Food(v));
}

function drawFood(context: CanvasRenderingContext2D) {
  food.forEach((f) => {
    drawDot(f.positon, 2, "yellow", context);
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
