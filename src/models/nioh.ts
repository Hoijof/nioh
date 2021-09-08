import { MAX_HUNGER } from "../consts";
import Vector from "./vector";

export default class Nioh {
  position: Vector = null;
  acceleration: Vector = null;
  target: Vector = null;
  hunger: number = MAX_HUNGER;
  shouldDelete = false;

  constructor(x: number, y: number) {
    this.position = new Vector(x, y);

    this.acceleration = new Vector(10, 5);
  }

  updatePosition(delta: number) {
    this.position = this.position.sum(this.acceleration.scalarProduct(delta));
  }

  manageHunger(delta: number) {
    this.hunger -= delta;

    if (this.hunger < MAX_HUNGER / 2) {
      // this.searchFood();
    }

    if (this.hunger <= 0) {
      this.shouldDelete = true;
    }
  }

  tick(delta: number) {
    this.updatePosition(delta);

    this.manageHunger(delta);


  }
}
