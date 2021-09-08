export default class Canvas {
  width = 0;
  height = 0;
  backgroundColor = "black";
  canvas: HTMLCanvasElement = null;
  context: CanvasRenderingContext2D = null;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.computeSize();
  }

  computeSize() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  }

  drawBackground() {
    const { context: ctx, canvas } = this;

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
