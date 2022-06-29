import { ISliderAutoplayOptions } from "../Slider.autoplay.interface/Slider.autoplay.options.interface";
import { onChangeIndex } from "../../Slider.interface/Slider.event.type";

export interface ISliderAutoplayBase {
  _slider:HTMLElement | null;
  _slider_track: HTMLElement | null;

  _index: number;
  change_index: onChangeIndex;

  _timeout: NodeJS.Timeout;
  _delay: number;

  Start(): void;
  Stop(): void;
  Waiting(): NodeJS.Timeout;

  Options(options: ISliderAutoplayOptions): void;

  set Change_index(callback: onChangeIndex);

  Destroy():void
}
