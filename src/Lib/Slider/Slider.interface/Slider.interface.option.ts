import React from "react";

import {
  focus,
  Infinite_Type,
  Slider_Type,
  SliderBack_Type,
  SliderElement_Type,
} from "../Slider.type/Slider_Type";

import { ISliderAutoplayOptions } from "../Slider.autoplay/Slider.autoplay.interface/Slider.autoplay.options.interface";
import {
  ISliderProgressbarOption
} from "../Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";

export interface ISlider {
  slider_options: ISliderOptions;
  pagination: {
    is: boolean;
    location: Slider_Type.VERTICAL | Slider_Type.HORIZONTAL;
  };
  swipe: boolean;
  gap: number;
  autoplay: ISliderAutoplayOptions;
  progressbar: ISliderProgressbarOption;
  focus: focus;
  arrows: boolean;
  elements_on_screen: number;
  title: string;
  width: 'default' | 'stretched'
  children?: React.ReactNode;
}

export interface ISliderOptions {
  slider_type: Slider_Type;
  infinite_type: Infinite_Type;
  slider_back_type: SliderBack_Type;
  slider_element_type: SliderElement_Type;
}