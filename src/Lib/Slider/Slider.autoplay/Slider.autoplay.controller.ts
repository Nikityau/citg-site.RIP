import {ISliderAutoplayBase} from "./Slider.autoplay.base/Slider.autoplay.base";
import {ISliderAutoplayOptions} from "./Slider.autoplay.interface/Slider.autoplay.options.interface";
import {EventType, onChangeIndex} from "../Slider.interface/Slider.event.type";

export class SliderAutoplayController implements ISliderAutoplayBase {
  _slider:HTMLElement | null = null;
  _slider_track: HTMLElement | null = null;

  private _first_el: HTMLElement | null = null;

  _index = 0;
  change_index: onChangeIndex = (i) => { return i};

  _timeout: NodeJS.Timeout = setTimeout(() => { return }, 0);
  _delay = 0;

  private _offset_coeff:number = 0;

  private options: ISliderAutoplayOptions = {
    autoplay: false,
    delay: 0,
    swipe: "unset",
    smooth: false,
  };

  constructor(slider:HTMLElement,slider_track: HTMLElement, index: number, options: ISliderAutoplayOptions) {
    this._slider = slider;
    this._slider_track = slider_track;
    this._index = index;
    this.options = options;
    this._delay = options.delay;

    this._first_el = <HTMLElement>this._slider_track.querySelector('.slider-element');

    this.Start = this.Start.bind(this);
    this.Stop = this.Stop.bind(this);
    this.Smooth_Motion = this.Smooth_Motion.bind(this)
  }

  public async Start() {
    if(!this._slider_track) return
    if (this._delay == 0) return this._timeout;

    if (this.options.smooth) {
      this._slider_track.style.transition = 'all 3s'
      this._timeout = setInterval(async () => await this.Smooth_Motion(), 100);
    } else {
      this._timeout = setInterval(async () => {
         await this.change_index(this._index + 1, EventType.AUTOPLAY);
      }, this._delay);
    }

    return this._timeout;
  }
  public async Stop() {
    await clearTimeout(this._timeout);
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

  private async Smooth_Motion() {
    if(!this._first_el || !this._slider_track || !this._slider) return;

    this._offset_coeff = 300;
    if(this._slider_track.offsetLeft + 20 <= this._slider.clientLeft - this._slider.clientWidth) {
      this._slider_track.style.transition = 'none'
      //this._slider_track.style.transform = `translateX(${this._slider.clientWidth - this._first_el.offsetLeft + this._first_el.clientWidth - 1.55})px`
      /*this._slider_track.style.left = this._slider.clientWidth
          - this._first_el.offsetLeft + this._first_el.clientWidth - 1.55 + 'px';*/
      setTimeout(() => {
        this._slider_track.style.transition = 'all 3s'
      }, 10)
    }

    const in_percent = (this._slider_track.offsetLeft + 20) * 100 / (this._slider.clientLeft - this._slider.clientWidth)

    //await this.change_index(in_percent, EventType.AUTOPLAY);

    //this._slider_track.style.transform = `translateX(${this._slider_track.offsetLeft - this._offset_coeff}px)`
    //this._slider_track.style.left = this._slider_track.offsetLeft - this._offset_coeff + 'px';
  }

  set Change_index(callback: onChangeIndex) {
    this.change_index = callback;
  }

  public Destroy():void {
    this.Stop();
  }
}
