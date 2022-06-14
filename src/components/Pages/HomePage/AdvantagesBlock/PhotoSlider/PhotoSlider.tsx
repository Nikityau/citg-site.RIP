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
            {
                window.screen.width >= 500 &&
                <div className={photoslider.innerWrapper}>
                    <div className={photoslider.sliderContainer}>
                        <Slider
                            slider_options={{
                                slider_type: Slider_Type.HORIZONTAL,
                                infinite_type: Infinite_Type.INFINITE,
                                slider_back_type: SliderBack_Type.DEFAULT,
                                slider_element_type: SliderElement_Type.CARD
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
                            arrows={{
                                is: false,
                                direction: Slider_Type.VERTICAL
                            }}
                            elements_on_screen={3}
                            title={''}
                            width={'default'}>
                            <SliderElement title={'Создавай мечту'}>
                                <img src={makeDream} alt={'img'}/>
                            </SliderElement>
                            <SliderElement title={'Развивайся'}>
                                <img src={evolve} alt={'img'}/>
                            </SliderElement>
                            <SliderElement title={'Твори'}>
                                <img src={sm_img} alt={'img'}/>
                            </SliderElement>
                        </Slider>
                    </div>
                </div>
            }
            {
                window.screen.width < 500 &&
                <div className={photoslider.mobVer}>
                    <Slider
                        slider_options={{
                            slider_element_type: SliderElement_Type.CARD,
                            slider_back_type:SliderBack_Type.DEFAULT,
                            infinite_type:Infinite_Type.INFINITE,
                            slider_type:Slider_Type.SINGLE
                        }}
                        pagination={{
                            is:true,
                            location:Slider_Type.HORIZONTAL
                        }}
                        swipe={true}
                        gap={20}
                        autoplay={{
                            autoplay:true,
                            swipe: true,
                            smooth: false,
                            delay: 2000
                        }}
                        progressbar={{
                            appear: false,
                            position:ISliderProgressBarPosition.LEFT_BOTTOM,
                            direction: ISliderProgressBarDirection.HORIZONTAL
                        }}
                        focus={'no'}
                        arrows={{
                            is: false,
                            direction: Slider_Type.HORIZONTAL
                        }}
                        elements_on_screen={3}
                        title={''}
                        width={"default"}
                    >
                        <SliderElement title={'Создавай мечту'}>
                            <div className={'slider-img-el'} style={{ backgroundImage: `url(${makeDream})` }}/>
                        </SliderElement>
                        <SliderElement title={'Развивайся'}>
                            <div className={'slider-img-el'} style={{ backgroundImage: `url(${evolve})` }}/>
                        </SliderElement>
                        <SliderElement title={'Твори'}>
                            <div className={'slider-img-el'} style={{ backgroundImage: `url(${sm_img})` }}/>
                        </SliderElement>
                    </Slider>
                </div>
            }
        </div>
    );
}

export default PhotoSlider;
