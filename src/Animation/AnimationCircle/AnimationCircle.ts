import { CircleTrail } from "./CircleTrail";
import { MathUtils } from "../../MathUtils/MathUtils";
import { IAnimationInterface } from "../AnimationBase/Animation.interface";

export interface ICoords {
  x: number;
  y: number;
}

export class AnimationCircle implements IAnimationInterface {
  element: HTMLElement;
  sun: ICoords | null;
  private _trail: CircleTrail | null;
  private cx: number;
  private cy: number;
  private _r: number;
  private angle: number = 0;
  delay: number;
  timeout = setTimeout(() => {}, 0);

  private isMobile: boolean = false;

  constructor(
    el: HTMLElement,
    trail: HTMLElement | null,
    cx: number,
    cy: number,
    r: number,
    sun: ICoords | null = null,
    delay: number = 20,
    mobile = false
  ) {
    this.element = el;
    this.cx = cx;
    this.cy = cy;
    this._r = r;
    this.delay = delay;

    this.sun = sun;

    this.isMobile = mobile;

    if (trail) {
      this._trail = new CircleTrail(
        trail,
        cx - trail.clientWidth / 2,
        cy - trail.clientHeight / 2,
        r * 2,
        el.clientWidth / 3
      );
    } else {
      this._trail = null;
    }
  }

  public get trail(): HTMLElement | null {
    if (!this._trail) return null;

    return this._trail.trail;
  }
  public set trail(trail: HTMLElement | null) {
    if (!trail) {
      this._trail = null;
      return;
    }

    if (!this._trail) {
      this._trail = new CircleTrail(
        trail,
        this.cx,
        this.cy,
        this._r * 2,
        this.element.clientWidth / 3
      );
      return;
    }

    this._trail.trail = trail;
  }

  public get r(): number {
    return this._r;
  }
  public set r(r: number) {
    this._r = r;
  }

  public Start(): NodeJS.Timeout {
    if (this.isMobile) {
      const coord = MathUtils.PointsCoordsOnCircle(100, this._r, this.cx, this.cy);

      this.element.style.top = coord.y + "px";
      this.element.style.left = coord.x + "px";

      return setTimeout(() => {});
    }

    this.timeout = setInterval(() => {
      this.angle += 1;

      const coord = MathUtils.PointsCoordsOnCircle(this.angle, this._r, this.cx, this.cy);

      this.element.style.top = coord.y + "px";
      this.element.style.left = coord.x + "px";

      if (this.sun) {
        const angle = MathUtils.RotateAngle(coord.x, coord.y, this.sun.x, this.sun.y);
        this.element.style.transform = `rotate(-${angle * 2}deg)`;
      }

      if (this.angle >= 360) {
        this.angle = 0;
      }
    }, this.delay);

    return this.timeout;
  }
  public Stop(): void {
    clearInterval(this.timeout);
  }
}
