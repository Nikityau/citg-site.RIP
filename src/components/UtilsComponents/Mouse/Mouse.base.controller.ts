import { IMouse } from "./Mouse.interface";

export class MouseBaseController {
  private _x = 0;
  private _y = 0;

  private onCoordsChange: (obj: IMouse) => void = (obj:IMouse) => { return obj };

  constructor(callback: (obj: IMouse) => void) {
    this.MouseMove = this.MouseMove.bind(this);

    this.onCoordsChange = callback;

    this.Subscribe();
  }

  public Subscribe() {
    //window.addEventListener("mousemove", this.MouseMove);
  }
  public Unsubscribe() {
    //window.removeEventListener("mousemove", this.MouseMove);
  }

  private MouseMove(e: MouseEvent) {
    this._x = e.pageX;
    this._y = e.pageY;

    this.onCoordsChange({ x: this._x, y: this._y });
  }

  public get X(): number {
    return this._x;
  }
  public get Y(): number {
    return this._y;
  }

  public set setOnCoordsChange(callback: (obj: IMouse) => void) {
    this.onCoordsChange = callback;
  }
}
