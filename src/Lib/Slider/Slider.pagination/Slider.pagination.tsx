import React, { useEffect, useState } from "react";
import { ISliderPagination } from "./Slider.pagination.interface/Slider.pagination.interface";
import SliderPaginationCircle from "./Slider.pagination.circle/Slider.pagination.circle";

import { Array_by_number } from "../../../Utils/Func/Array_by_number";
import { Slider_Type } from "../Slider.type/Slider_Type";

import classes from "./Slider.pagination.module.scss";

const SliderPagination = ({ length, pagination_type, current_el_index }: ISliderPagination) => {
  const [circle_array, set_circle_array] = useState<number[]>([]);

  useEffect(() => {
    set_circle_array(Array_by_number(length));
  }, [length]);

  return (
    <div
      className={pagination_type == Slider_Type.VERTICAL ? classes.vertical : classes.horizontal}
    >
      {circle_array.map((circle, index) => {
        return (
          <SliderPaginationCircle
            key={index}
            className={[
              classes.circle,
              index == current_el_index
                ? [
                    classes.currentCircle,
                    pagination_type == Slider_Type.VERTICAL
                      ? classes.verticalCurrent
                      : classes.horizontalCurrent,
                  ].join(" ")
                : "",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
};

export default SliderPagination;
