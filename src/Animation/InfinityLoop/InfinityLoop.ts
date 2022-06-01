import { IAnimationInterface } from "../AnimationBase/Animation.interface";
import { MathUtils } from "../../MathUtils/MathUtils";

export enum InfinityLoopDirection {
  LEFT = "left",
  RIGHT = "right",
}

export class InfinityLoop implements IAnimationInterface {
  element: HTMLElement;
  delay: number;
  timeout: NodeJS.Timeout = setTimeout(() => { return }, 0);

  private a = 5;
  private scale = 40;
  private fi = 0;
  private r = 200;

  private _direction: InfinityLoopDirection = InfinityLoopDirection.RIGHT;

  private _cx: number;
  private _cy: number;

  constructor(
    el: HTMLElement,
    cx: number,
    cy: number,
    direction: InfinityLoopDirection = InfinityLoopDirection.RIGHT,
    delay = 20
  ) {
    this.element = el;
    this.delay = delay;

    this._cx = cx;
    this._cy = cy;

    this._direction = direction;

    this.Init();
  }

  private Init() {
    this.element.style.top = this._cy - this.element.clientHeight / 2 + "px";
    this.element.style.left = this._cx - this.element.clientWidth / 2 + "px";
  }

  private LeftDirection = (): NodeJS.Timeout => {
    return this.timeout;
  };

  private RightDirection = (): NodeJS.Timeout => {
    this.timeout = setInterval(() => {
      this.fi += 1;

      const coords = MathUtils.PointsCoordsOnCircle(this.fi, this.r, this._cx, this._cy);

      this.element.style.top = coords.y + "px";
      this.element.style.left = coords.x + "px";

      if (this.fi >= 360) {
        this.fi = 0;
      }
    }, this.delay);

    return this.timeout;
  };

  Start(): NodeJS.Timeout {
    /* if (this._direction == InfinityLoopDirection.LEFT) {
      return this.LeftDirection();
    }

    if (this._direction == InfinityLoopDirection.RIGHT) {
      return this.RightDirection();
    }*/

    return this.timeout;
  }
  Stop() {
    clearInterval(this.timeout);
  }
}
