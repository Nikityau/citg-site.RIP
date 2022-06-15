import React, {MouseEventHandler} from "react";
import { ISliderElement } from "./Slider.element.interface/Slider.element.interface";

import slider from "../Slider.module.scss";

const SliderElement = ({ children, title, onClick }: ISliderElement) => {
  return (
    <div
      className={[slider.elementContainer, "slider-element"].join(" ")}
      data-slider-main-element={"true"}
      onClick={onClick}
    >
      {children}
      <div className={'slider-element-title'}>
        <span>{ title }</span>
      </div>
    </div>
  );
};

export default SliderElement;
