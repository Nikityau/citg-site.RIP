import { Slider_Type } from "../../Slider.type/Slider_Type";
import { onChangeIndex } from "../../Slider.interface/Slider.event.type";

export interface ISliderSwipeBase {
  swipe_el: HTMLElement | null;

  _swipe_type: Slider_Type.HORIZONTAL | Slider_Type.VERTICAL;
  _index: number;

  change_index: onChangeIndex;

  On_Click(e: Event): void;
  On_Touch(e: Event): void;

  On_Swipe(e: Event): void;
  On_Mouse_move(e: Event): void;

  On_Touch_end(e: Event): void;
  On_Mouse_up(e: Event): void;

  Autoplay_Subb()
  Autoplay_Unsub()

  set index(i: number);

  set Change_index(callback: onChangeIndex);
}
