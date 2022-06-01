import React from "react";
import { ISliderElement } from "./Slider.element.interface/Slider.element.interface";

import slider from "../Slider.module.scss";

const SliderElement = ({ children }: ISliderElement) => {
  return (
    <div
      className={[slider.elementContainer, "slider-element"].join(" ")}
      data-slider-main-element={"true"}
    >
      {children}
    </div>
  );
};

export default SliderElement;
