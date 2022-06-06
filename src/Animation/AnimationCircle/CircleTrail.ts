export class CircleTrail {
  private _trail: HTMLElement;
  private _isSet = false;
  private _color: string;
  private _cx: number;
  private _cy: number;
  private _diameter: number;

  constructor(
    trail: HTMLElement,
    cx: number,
    cy: number,
    diameter: number,
    border = 50,
    color = "rgba(196,196,196,0.5)"
  ) {
    this._trail = trail;

    this._cx = cx;
    this._cy = cy;
    this._diameter = diameter;

    this._trail.style.border = border + "px solid";

    this._color = color;

    this.Trail();
  }

  public get diameter(): number {
    return this._diameter;
  }
  public set diameter(diameter: number) {
    this._diameter = diameter;
  }

  public get trail(): HTMLElement {
    return this._trail;
  }

  public set trail(trail: HTMLElement) {
    this._trail = trail;
    this._isSet = false;
  }

  public get isSet(): boolean {
    return this._isSet;
  }

  public Trail() {
    this._isSet = true;

    this._trail.style.top = this._cy + "px";
    this._trail.style.left = this._cx + "px";

    this._trail.style.width = this._diameter + "px";
    this._trail.style.height = this._diameter + "px";

    this._trail.style.borderColor = "rgba(255,255,255,0.3)";
  }
}
