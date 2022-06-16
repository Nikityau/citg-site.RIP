import React, {useEffect} from 'react';

import './Awards.block.scss'
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
import SliderPairSection from "../../../../../Lib/Slider/Slider.element.pair.section/Slider.pair.section";
import {Img} from "../../../../../SynteticData/Syntetic.data.type";

interface IAwardsBlock {
    images: Img[]
}

import {MakePair} from "../../../../../Lib/Slider/Slider.utils/MakePair";

const AwardsBlock = ({ images }:IAwardsBlock) => {

    return (
        <div className={'awards-block'}>
            <div className={'awards-block_title'}>
                <h5>Achievement & Awards</h5>
            </div>
            <div className={'awards-block_slider'}>
                <Slider
                    slider_options={{
                        slider_element_type:SliderElement_Type.DEFAULT,
                        slider_back_type: SliderBack_Type.DEFAULT,
                        slider_type:Slider_Type.VERTICAL,
                        infinite_type: Infinite_Type.INFINITE
                    }}
                    pagination={{
                        location: Slider_Type.VERTICAL,
                        is: true
                    }}
                    swipe={false}
                    gap={20}
                    autoplay={{
                        autoplay: true,
                        swipe: false,
                        smooth: false,
                        delay: 2000
                    }}
                    progressbar={{
                        position: ISliderProgressBarPosition.LEFT_BOTTOM,
                        direction: ISliderProgressBarDirection.HORIZONTAL,
                        appear: false
                    }}
                    focus={'no'}
                    arrows={{
                        is: true,
                        direction: Slider_Type.VERTICAL
                    }}
                    elements_on_screen={1}
                    title={''}
                    width={"default"}>
                    {
                        MakePair(images).map(img => (
                            <SliderPairSection key={img.firstEl.id}
                                firstCell={
                                    <div>
                                        { img?.firstEl && <img src={ img.firstEl?.imgSrc } alt={'img'}/> }
                                    </div>
                                }
                                secondCell={
                                    <div>
                                        { img?.secondEl && <img src={ img.secondEl?.imgSrc } alt={'img'}/> }
                                    </div>
                                }/>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default AwardsBlock;