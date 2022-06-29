import React, {ForwardedRef, useEffect, useState} from "react";
import { ISliderPagination } from "./Slider.pagination.interface/Slider.pagination.interface";

import SliderPaginationCircle from "./Slider.pagination.circle/Slider.pagination.circle";

import { Array_by_number } from "../../../Utils/Func/Array_by_number";

import { Slider_Type } from "../Slider.type/Slider_Type";

import classes from "./Slider.pagination.module.scss";

const SliderPagination = React.forwardRef(({ length, pagination_type, current_el_index, id }: ISliderPagination, ref:ForwardedRef<HTMLDivElement>) => {
  const [circle_array, set_circle_array] = useState<number[]>([]);

  useEffect(() => {
    set_circle_array(Array_by_number(length));
  }, [length]);

  return (
    <div ref={ref} id={id}
      className={pagination_type == Slider_Type.VERTICAL ? classes.vertical : classes.horizontal}
    >
      {circle_array.map((circle, index) => {
        return (
          <SliderPaginationCircle
            key={index}
            circleIndex={index}
            className={[
              classes.circle,
            ].join(" ")}
          />
        );
      })}
    </div>
  );
});


SliderPagination.displayName = "SliderPagination"

export default SliderPagination;
