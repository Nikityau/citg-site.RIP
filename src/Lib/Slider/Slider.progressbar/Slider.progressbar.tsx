import React, {ForwardedRef} from 'react';

import {
    ISliderProgressBarDirection,
    ISliderProgressbarOption,
    ISliderProgressBarPosition
} from "./Slider.progressbar.interface.option/Slider.progressbar.interface.option";

import './Slider.progressbar.scss'

const SliderProgressbar = React.forwardRef((option:ISliderProgressbarOption, ref:ForwardedRef<HTMLDivElement>) => {

    const getClassNameByOption = () => {
        const classNames:string[] = [];

        switch (option.position) {
            case ISliderProgressBarPosition.LEFT_BOTTOM:
                classNames.push('slider_progress-bar-back-line__bottom-left')
                break;
            case ISliderProgressBarPosition.LEFT_TOP:
                classNames.push('slider_progress-bar-back-line__top-left')
                break;
            case ISliderProgressBarPosition.RIGHT_BOTTOM:
                classNames.push('slider_progress-bar-back-line__bottom-right')
                break;
            case ISliderProgressBarPosition.RIGHT_TOP:
                classNames.push('slider_progress-bar-back-line__top-right')
                break;
            default:
                classNames.push('slider_progress-bar-back-line__bottom-left')
                break;
        }

        switch (option.direction) {
            case ISliderProgressBarDirection.HORIZONTAL:
                classNames.push('slider_progress-bar-back-line__horizontal')
                break;
            case ISliderProgressBarDirection.VERTICAL:
                classNames.push('slider_progress-bar-back-line__vertical')
                break;
            default:
                classNames.push('slider_progress-bar-back-line__horizontal')
                break;
        }

        return classNames.join(' ')
    }

    return (
        <div className={['slider_progress-bar-back-line', getClassNameByOption()].join(' ')} ref={ref}>
            <div className={'slider_progress-bar-progress-line'}/>
        </div>
    );
});

SliderProgressbar.displayName = 'SliderProgressBar'

export default SliderProgressbar;