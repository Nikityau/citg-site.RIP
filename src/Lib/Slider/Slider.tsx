import React, { useEffect, useState } from "react";

import { ISlider } from "./Slider.interface/Slider.interface";

import SliderPagination from "./Slider.pagination/Slider.pagination";

import { SliderBaseController } from "./Slider.controller/Slider.base.controller";

import { Slider_Type } from "./Slider.type/Slider_Type";

import slider from "./Slider.module.scss";
import "./Slider.scss";

import slider_arrow from "../../assets/icons/arrow.svg";

const slider_controller = new SliderBaseController();

const Slider = ({
  slider_options,
  pagination,
  children,
  gap,
  progressbar,
  autoplay,
  focus,
  elements_on_screen,
  arrows,
  title,
  swipe,
}: ISlider) => {
  const unique_slider_id = `slider_${slider_options.slider_type}_${slider_options.slider_back_type}_${slider_options.slider_element_type}_${slider_options.infinite_type}_${pagination.is}_${pagination.location}_${progressbar}_${autoplay.autoplay}`;

  const [children_length, set_children_length] = useState<number>(0);
  const [current_el_index, set_current_el_index] = useState<number>(0);

  useEffect(() => {
    const slider = document.getElementById(unique_slider_id);
    const slider_track = document.getElementById(`${unique_slider_id}_track`);
    if (!slider || !slider_track) return;

    slider_controller.slider = slider;
    slider_controller.slider_track = slider_track;
    slider_controller.gap = gap;

    const left_arrow = document.getElementById(`${unique_slider_id}_left_arrow`);
    const right_arrow = document.getElementById(`${unique_slider_id}_right_arrow`);

    if (left_arrow && right_arrow) {
      slider_controller.Set_Arrows(left_arrow, right_arrow);
    }

    slider_controller.Set_Swipes();
    slider_controller.Set_Autoplay();

    slider_controller.change_index = set_current_el_index;

    slider_controller.Options(
      slider_options,
      pagination.is,
      autoplay,
      progressbar,
      focus,
      elements_on_screen
    );
  }, []);

  useEffect(() => {
    const l = children?.toString().split(",").length || 0;
    set_children_length(l);
    slider_controller.el_length = l;
    slider_controller.onChildrenChanges();
  }, [children]);

  const getSliderClass = (): string => {
    switch (slider_options.slider_type) {
      case Slider_Type.DEFAULT:
      case Slider_Type.HORIZONTAL:
        return [slider.trackDefault, slider.horizontalTrack].join(" ");
      case Slider_Type.VERTICAL:
        return slider.verticalTrack;
      case Slider_Type.SINGLE:
        return slider.single;
      case Slider_Type.EXTENDED:
        return slider.extendedTrack;
      case Slider_Type.SQUARE:
        return slider.square;
      default:
        return slider.trackDefault;
    }
  };


  return (
    <div className={slider.container}>
      <div className={slider.tittle}>
        <h5>{title}</h5>
      </div>
      {arrows && (
        <>
          <div
            className={slider.leftArrow}
            id={`${unique_slider_id}_left_arrow`}
            data-arrow={"left"}
            onSelectCapture={(e) => e.preventDefault()}
          >
            <img src={slider_arrow} alt={"img"} onDragStart={(e) => e.preventDefault()} />
          </div>
          <div
            className={slider.rightArrow}
            id={`${unique_slider_id}_right_arrow`}
            data-arrow={"right"}
          >
            <img src={slider_arrow} alt={"img"} onDragStart={(e) => e.preventDefault()} />
          </div>
        </>
      )}
      <div
        className={slider.slider}
        id={`slider_${slider_options.slider_type}_${slider_options.slider_back_type}_${slider_options.slider_element_type}_${slider_options.infinite_type}_${pagination.is}_${pagination.location}_${progressbar}_${autoplay.autoplay}`}
      >
        <div
          id={`slider_${slider_options.slider_type}_${slider_options.slider_back_type}_${slider_options.slider_element_type}_${slider_options.infinite_type}_${pagination.is}_${pagination.location}_${progressbar}_${autoplay.autoplay}_track`}
          className={[slider.track, "slider-track", getSliderClass()].join(" ")}
          style={{ gap: gap + "px" }}
        >
          {children}
        </div>
      </div>
      {pagination.is && (
        <SliderPagination
          pagination_type={pagination.location}
          current_el_index={current_el_index}
          length={children_length}
        />
      )}
    </div>
  );
};

export default Slider;
