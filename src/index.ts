import "./index.scss";
import Canvas from "./render/canvas";
import { tick, generateNiohs, drawEntities, addFood } from "./behavior";
import Vector from "./models/vector";

let canvas = new Canvas("canvas");
let lastRender = 0;

generateNiohs(1);

function update(delta: number) {
  tick(delta, canvas);
}

function draw() {
  canvas.clear();

  canvas.drawBackground();

  drawEntities(canvas.context);
}

function loop(timestamp: number) {
  var progress = timestamp - lastRender;

  update(progress / 1000);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

window.addEventListener("resize", () => {
  canvas.computeSize();
});

canvas.canvas.addEventListener("click", (ev: MouseEvent) => {
  addFood(new Vector(ev.clientX, ev.clientY));
});
