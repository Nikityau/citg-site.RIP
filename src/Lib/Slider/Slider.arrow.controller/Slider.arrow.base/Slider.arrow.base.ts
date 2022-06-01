import { onChangeIndex } from "../../Slider.interface/Slider.event.type";

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
  }: {
    left: number;
    top: number;
    width: number;
    height: number;
  }): void;

  on_Arrow_Click(e: Event): void;

  set left_arrow(arrow: HTMLElement);
  set right_arrow(arrow: HTMLElement);

  set index(i: number);

  set change_index(callback: onChangeIndex);
}
