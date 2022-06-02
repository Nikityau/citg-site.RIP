import {ISliderProgressbarOption} from "../Slider.progressbar.interface.option/Slider.progressbar.interface.option";

export interface ISliderProgressbarBase {
    _back_bar: HTMLElement | null;
    _bar_line: HTMLElement | null;

    Options(back_bar:HTMLElement, bar_line: HTMLElement, options:ISliderProgressbarOption, max:number);

    Set_Progress(i:number)
}