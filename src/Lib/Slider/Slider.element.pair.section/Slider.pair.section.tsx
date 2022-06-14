import React from 'react';

import './Slider.pair.section.scss'

interface ISliderPairSection {
    firstCell: React.ReactNode,
    secondCell: React.ReactNode,
}

const SliderPairSection = ({firstCell, secondCell}: ISliderPairSection) => {
    return (
        <div className={'slider-element-pair-section'}
             data-slider-pair-section={true}
             data-slider-main-element={true}
        >
            {firstCell}
            {secondCell}
        </div>
    );
};

export default SliderPairSection;