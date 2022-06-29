import React from "react";

import './Slider.pagination.circle.scss'

const SliderPaginationCircle = ({ className, circleIndex }: { className: string, circleIndex: number }) => {
  return <div className={className} data-slider-pagination-circle={''} data-circle-index={circleIndex}/>;
};

export default SliderPaginationCircle;
