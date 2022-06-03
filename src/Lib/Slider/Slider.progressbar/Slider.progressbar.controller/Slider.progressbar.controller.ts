import {ISliderProgressbarBase} from '../Slider.progressbar.controller.base/Slider.progressbar.base.interface'
import {
    ISliderProgressBarDirection,
    ISliderProgressbarOption,
    ISliderProgressBarPosition
} from '../Slider.progressbar.interface.option/Slider.progressbar.interface.option'

export class SliderProgressbarController implements ISliderProgressbarBase {
    _back_bar: HTMLElement | null = null;
    _bar_line: HTMLElement | null = null;

    private _max_index:number = 1;

    private _option:ISliderProgressbarOption = {
        appear:false,
        direction: ISliderProgressBarDirection.HORIZONTAL,
        position: ISliderProgressBarPosition.LEFT_BOTTOM
    }

    constructor() {
        this.Set_Progress = this.Set_Progress.bind(this);
    }

    Options(back_bar: HTMLElement, bar_line: HTMLElement, options: ISliderProgressbarOption, max:number) {
        this._back_bar = back_bar;
        this._bar_line = bar_line;
        this._option = options;

        this._max_index = max;
    }

    public Set_Progress(i:number, percent: boolean = false) {
        if(!this._back_bar || !this._back_bar) return;

        const length_of_back_line = this.Get_Length();

        if(percent) {
            const in_px:number =  length_of_back_line * i / 100;

            this.Progress(in_px);
            return;
        }

        const progress = i * length_of_back_line / (this._max_index - 1);
        this.Progress(progress);
    }
    private Get_Length():number {
        if(this._option.direction == ISliderProgressBarDirection.HORIZONTAL) {
            return this._back_bar.clientWidth;
        }
        if(this._option.direction == ISliderProgressBarDirection.VERTICAL) {
            return  this._back_bar.clientHeight;
        }
    }
    private Progress(progress:number):void {
        if(this._option.direction == ISliderProgressBarDirection.HORIZONTAL) {
            this._bar_line.setAttribute("style", `width:${progress}px`)
        }
        if(this._option.direction == ISliderProgressBarDirection.VERTICAL) {
            this._bar_line.setAttribute("style", `height:${progress}px`)
        }
    }
}