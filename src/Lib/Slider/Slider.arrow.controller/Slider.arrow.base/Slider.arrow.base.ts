import { onChangeIndex } from "../../Slider.interface/Slider.event.type";
import {Slider_Type} from "../../Slider.type/Slider_Type";

export interface ISliderArrowBase {
  _left_arrow: HTMLElement | null;
  _right_arrow: HTMLElement | null;

  _index: number;
  _change_index: onChangeIndex;

  Set_Arrows({
    height,
    top,
    left,
    width,
      direction
  }: {
    left: number;
    top: number;
    width: number;
    height: number;
    direction: Slider_Type.VERTICAL | Slider_Type.HORIZONTAL
  }): void;

  on_Arrow_Click(e: Event): void;

  set left_arrow(arrow: HTMLElement);
  set right_arrow(arrow: HTMLElement);

  set index(i: number);

  set change_index(callback: onChangeIndex);

  Destroy():void
}
