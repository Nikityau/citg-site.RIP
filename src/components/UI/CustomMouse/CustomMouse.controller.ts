import { IMouse } from "../../UtilsComponents/Mouse/Mouse.interface";

export class CustomMouseController {
  private _mouse: HTMLElement;
  private _mouse_additional_point: HTMLElement;

  private _defaule_size_of_add_point: IMouse;

  private _x = 0;
  private _y = 0;

  private isLarge = false;

  private coeff = 0;
  private borderUp = 0;
  private borderBottom = 0;

  constructor(mouse: HTMLElement, point: HTMLElement, initX = 0, initY = 0) {
    this._mouse = mouse;
    this._mouse_additional_point = point;
    this._defaule_size_of_add_point = { x: point.clientWidth, y: point.clientHeight };

    this.borderUp = 20;
    this.borderBottom = 0;

    this.onChangeCoords({ x: initX, y: initY });

    this.onMouseClick = this.onMouseClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.ChangeSizeUp = this.ChangeSizeUp.bind(this);
    this.ChangeSizeDown = this.ChangeSizeDown.bind(this);

    this.initEvents();
  }

  private initEvents() {
    window.addEventListener("mousemove", (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.getAttribute("data-mouse-focus")) {
          this.onMouseEnter(e);
          return;
        }

        this.onMouseLeave(e);
        return;
      }
    });
  }

  private onMouseEnter(e: MouseEvent) {
    e.target
    this.ChangeSizeUp();
  }

  private onMouseLeave(e: MouseEvent) {
    e.target
    this.ChangeSizeDown();
  }

  private onMouseClick(e: MouseEvent) { e.target; return }

  private ToggleCursorSize() {
    if (this.isLarge) {
      this._mouse_additional_point.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      this._mouse_additional_point.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  private async ChangeSizeUp() {
    this._mouse_additional_point.style.background = "rgba(65, 0, 0, 0.25)";
    if (this.coeff >= this.borderUp) return;

    this.coeff += await (1 / 4);

    await this.ChangeSize(this.coeff);
  }

  private async ChangeSizeDown() {
    this._mouse_additional_point.style.background = "rgba(137, 148, 176, 0.5)";
    if (this.coeff <= this.borderBottom) {
      await this.ChangeSize(0);
      return;
    }

    this.coeff -= await (1 / 4);

    await this.ChangeSize(this.coeff);
  }

  private async ChangeSize(coeff: number) {
    this._mouse_additional_point.style.width = await (this._defaule_size_of_add_point.x +
      coeff +
      "px");
    this._mouse_additional_point.style.height = await (this._defaule_size_of_add_point.y +
      coeff +
      "px");
  }

  public onChangeCoords(coords: IMouse) {
    this._mouse.style.left = coords.x - this._mouse.clientWidth / 2 + "px";
    this._mouse.style.top = coords.y - this._mouse.clientHeight / 2 - window.scrollY + "px";

    this.ChangeCoordsAdditionalPoint(coords);
  }
  private async ChangeCoordsAdditionalPoint(coords: IMouse) {
    this._mouse_additional_point.style.transform = `translate3d(${
      coords.x - this._mouse_additional_point.clientWidth / 2
    }px,
        ${coords.y - this._mouse_additional_point.clientHeight / 2 - window.scrollY}px, 0)`;
    // this._mouse_additional_point.style.left = this._x - this._mouse_additional_point.clientWidth / 2 + 'px';
    // this._mouse_additional_point.style.top = coords.y - this._mouse_additional_point.clientHeight / 2 - window.scrollY + 'px'
  }
}
