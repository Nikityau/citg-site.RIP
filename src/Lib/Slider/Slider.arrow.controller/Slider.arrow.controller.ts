import { Subber } from "../../../Utils/Subber/Subber";
import { TypeEvent } from "../../../Utils/Subber/Subber.TypeEvent.enum";
import { ISliderArrowBase } from "./Slider.arrow.base/Slider.arrow.base";
import { EventType, onChangeIndex } from "../Slider.interface/Slider.event.type";

export class SliderArrowController implements ISliderArrowBase {
  _left_arrow: HTMLElement | null = null;
  _right_arrow: HTMLElement | null = null;

  _index: number = 0;
  _change_index: onChangeIndex = (i) => {};

  constructor() {
    this.on_Arrow_Click = this.on_Arrow_Click.bind(this);
  }

  // <Set Options>
  public Set_Arrows({
    height,
    top,
    left,
    width,
  }: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) {
    if (!this._left_arrow || !this._right_arrow) return;

    this._left_arrow.style.left = left - this._left_arrow.clientWidth / 2 + "px";
    this._left_arrow.style.top = top + height / 2 - this._left_arrow.clientHeight / 2 + "px";

    this._right_arrow.style.left = left + width - this._left_arrow.clientWidth / 2 + "px";
    this._right_arrow.style.top = top + height / 2 - this._right_arrow.clientHeight / 2 + "px";

    Subber.Subb(this._left_arrow, TypeEvent.CLICK, this.on_Arrow_Click);
    Subber.Subb(this._right_arrow, TypeEvent.CLICK, this.on_Arrow_Click);
  }
  // </Set Options>

  //<Event>

  on_Arrow_Click(e: Event) {
    if (e.target instanceof HTMLElement) {
      const attr = e.target.getAttribute("data-arrow");
      if (attr == "left") {
        this._change_index(this._index - 1, EventType.ARROWS);
      }
      if (attr == "right") {
        this._change_index(this._index + 1, EventType.ARROWS);
      }
    }

    return;
  }

  //</Event>

  //<Setters/Getters>

  public set left_arrow(arrow: HTMLElement) {
    this._left_arrow = arrow;
  }

  public set right_arrow(arrow: HTMLElement) {
    this._right_arrow = arrow;
  }

  public set index(i: number) {
    this._index = i;
  }

  public set change_index(callback: (i: number) => void) {
    this._change_index = callback;
  }

  //</Setters/Getters>
}
