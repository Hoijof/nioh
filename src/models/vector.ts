export default class Vector {
  constructor(public x: number, public y: number) {}

  towards(t: Vector): Vector {
    return new Vector(t.x - this.x, t.y - this.y);
  }

  getDirection(): number {
    return Math.atan2(this.y, this.x);
  }

  setDirection(angle: number): Vector {
    const magnitude = this.getMagnitude();

    return new Vector(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
  }

  getMagnitude(): number {
    // use pythagoras theorem to work out the magnitude of the vector
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  setMagnitude(magnitude: number): Vector {
    const direction = this.getDirection();

    return new Vector(
      Math.cos(direction) * magnitude,
      Math.sin(direction) * magnitude
    );
  }

  add(v2: Vector): Vector {
    return new Vector(this.x + v2.x, this.y + v2.y);
  }

  subtract(v2: Vector): Vector {
    return new Vector(this.x - v2.x, this.y - v2.y);
  }

  multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Vector {
    return new Vector(this.x / scalar, this.y / scalar);
  }

  copy(): Vector {
    return new Vector(this.x, this.y);
  }

  toString(): string {
    return "x: " + this.x + ", y: " + this.y;
  }

  static zero() {
    return new Vector(0, 0);
  }
}
