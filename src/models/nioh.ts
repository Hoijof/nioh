import {
  MAX_ACCELERATION,
  MAX_HUNGER,
  DEFAULT_VISION_RANGE,
  NIOH_STATES,
} from "../consts";
import Vector from "./vector";

export default class Nioh {
  position: Vector = null;
  acceleration: Vector = null;
  rotation: number;
  visionRange = DEFAULT_VISION_RANGE;
  target: Vector = null;
  hunger: number = MAX_HUNGER;
  shouldDelete = false;
  state = NIOH_STATES.IDLE;

  constructor(x: number, y: number) {
    this.position = new Vector(x, y);

    this.acceleration = new Vector(10, 5);
    this.rotation = this.acceleration.getDirection();
  }

  updatePosition(delta: number) {
    if (this.target) {
      if (this.target.towards(this.position).getMagnitude() < 1) {
        this.acceleration = Vector.zero();
      } else {
        this.acceleration = this.position
          .towards(this.target)
          .setMagnitude(MAX_ACCELERATION);

        this.rotation = this.acceleration.getDirection();
      }
    }

    this.position = this.position.add(this.acceleration.multiply(delta));
  }

  searchFood() {
    this.state = NIOH_STATES.SEARCHING_FOOD;
  }

  setTarget(v: Vector) {
    this.target = v;
  }

  manageHunger(delta: number) {
    this.hunger -= delta;

    if (this.hunger < MAX_HUNGER / 2) {
      this.searchFood();
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
