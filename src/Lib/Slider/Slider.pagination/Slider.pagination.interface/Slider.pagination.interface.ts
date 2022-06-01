import { Slider_Type } from "../../Slider.type/Slider_Type";

export interface ISliderPagination {
  length: number;
  current_el_index: number;
  pagination_type: Slider_Type.VERTICAL | Slider_Type.HORIZONTAL;
}
