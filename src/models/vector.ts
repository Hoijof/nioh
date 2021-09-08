export default class Vector {
  constructor(public x: number, public y: number) {}

  sum(b: Vector) {
    return new Vector(this.x + b.x, this.y + b.y);
  }

  scalarProduct(n: number) {
    return new Vector(this.x * n, this.y * n);
  }
}
