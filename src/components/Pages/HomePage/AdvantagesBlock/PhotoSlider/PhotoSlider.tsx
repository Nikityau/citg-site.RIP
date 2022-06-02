import React from 'react';

// components
// styles
import photoslider from './PhotoSlider.module.scss';
import './swiper.css';

// images
import evolve from '../../../../../assets/images/evolve.png';
import sm_img from '../../../../../assets/images/create.png'
import makeDream from '../../../../../assets/images/makeDream.png';

import Slider from "../../../../../Lib/Slider/Slider";
import {
    Infinite_Type,
    Slider_Type,
    SliderBack_Type,
    SliderElement_Type
} from "../../../../../Lib/Slider/Slider.type/Slider_Type";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from "../../../../../Lib/Slider/Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";
import SliderElement from "../../../../../Lib/Slider/Slider.element/Slider.element";

function PhotoSlider() {

    return (
        <div className={photoslider.container}>
            <div className={photoslider.innerWrapper}>
                <div className={photoslider.sliderContainer}>
                    <Slider
                        slider_options={{
                            slider_type: Slider_Type.HORIZONTAL,
                            infinite_type: Infinite_Type.INFINITE,
                            slider_back_type: SliderBack_Type.DEFAULT,
                            slider_element_type: SliderElement_Type.DEFAULT
                        }}
                        pagination={{
                            is: false,
                            location: Slider_Type.HORIZONTAL
                        }}
                        swipe={false}
                        gap={20}
                        autoplay={{
                            autoplay: true,
                            delay: 2000,
                            swipe: false,
                            smooth: true
                        }}
                        progressbar={{
                            direction: ISliderProgressBarDirection.HORIZONTAL,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM,
                            appear: true,
                        }}
                        focus={"no"}
                        arrows={false}
                        elements_on_screen={3}
                        title={''}>
                        <SliderElement title={''}>
                                <img src={makeDream} alt={'img'}/>
                        </SliderElement>
                        <SliderElement title={''}>
                                <img src={evolve} alt={'img'}/>
                        </SliderElement>
                        <SliderElement title={''}>
                                <img src={sm_img} alt={'img'}/>
                        </SliderElement>
                    </Slider>
                </div>
            </div>
            <div className={photoslider.sliderPlug}>
                <div className={photoslider.slider}>
                    <div className={photoslider.sliderCard}>
                        <div
                            className={photoslider.sliderCardImg}
                            style={{backgroundImage: `url(${makeDream})`}}
                        />
                        <div className={photoslider.sliderCardText}> texts</div>
                    </div>
                    <div className={photoslider.pagination}>
                        <div
                            className={photoslider.paginationCircle}
                            style={{background: '#F4682C', width: '19px', borderRadius: '16px'}}
                        />
                        <div className={photoslider.paginationCircle}/>
                        <div className={photoslider.paginationCircle}/>
                        <div className={photoslider.paginationCircle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoSlider;
