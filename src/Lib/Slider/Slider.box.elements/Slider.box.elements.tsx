import React, {useEffect, useRef, useState} from 'react';

import './Slider.box.elements.scss';

interface ISliderBoxEls {
    tiles: {
        x: number,
        y: number
    }
    gap: number
    children?: React.ReactNode
}

const SliderBoxElements = ({children, tiles, gap}: ISliderBoxEls) => {

    return (
        <div className={'slider-els-box'}
             data-slider-box-els={true}
             data-slider-main-element={"true"}
             style={{
                 gap: `${gap}px`
             }}
        >
            {children}
        </div>
    );
};

export default SliderBoxElements;