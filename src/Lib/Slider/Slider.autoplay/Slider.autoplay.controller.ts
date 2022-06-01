import { ISliderAutoplayBase } from "./Slider.autoplay.base/Slider.autoplay.base";
import { ISliderAutoplayOptions } from "./Slider.autoplay.interface/Slider.autoplay.options.interface";
import { EventType, onChangeIndex } from "../Slider.interface/Slider.event.type";

export class SliderAutoplayController implements ISliderAutoplayBase {
  _elem: HTMLElement | null = null;

  _index: number = 0;
  change_index: onChangeIndex = (i) => {};

  _timeout: NodeJS.Timeout = setTimeout(() => {}, 0);
  _delay: number = 0;

  private options: ISliderAutoplayOptions = {
    autoplay: false,
    delay: 0,
    swipe: "unset",
    smooth: false,
  };

  constructor(el: HTMLElement, index: number, options: ISliderAutoplayOptions) {
    this._elem = el;
    this._index = index;
    this.options = options;
    this._delay = options.delay;

    this.Start = this.Start.bind(this);
    this.Stop = this.Stop.bind(this);
  }

  Start(): NodeJS.Timeout {
    if (this._delay == 0) return this._timeout;

    if (this.options.smooth) {
    } else {
      this._timeout = setInterval(() => {
        this.change_index(this._index + 1, EventType.AUTOPLAY);
      }, this._delay);
    }

    return this._timeout;
  }
  Stop() {
    clearTimeout(this._timeout);
  }
  Waiting(): NodeJS.Timeout {
    this.Stop();
    this._timeout = setTimeout(this.Start, this._delay * 1.5);

    return this._timeout;
  }

  Options(options: ISliderAutoplayOptions) {
    this.options = options;
    this._delay = options.delay;
  }

  set Change_index(callback: onChangeIndex) {
    this.change_index = callback;
  }
}
