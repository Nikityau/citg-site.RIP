import React from 'react';

import './Projects.block.scss'
import AboutMePart from "./AboutMe.part/AboutMe.part";
import Slider from "../../../../Lib/Slider/Slider";
import SliderElement from "../../../../Lib/Slider/Slider.element/Slider.element";
import {
    Infinite_Type,
    Slider_Type,
    SliderBack_Type,
    SliderElement_Type
} from "../../../../Lib/Slider/Slider.type/Slider_Type";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from "../../../../Lib/Slider/Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";

const ProjectsBlock = () => {
    return (
        <div className={'projects-portfolio-block'}>
            <div className={'projects-portfolio-block_slider'}>
                <div className={'projects-portfolio-block_slider-title'}>
                    <h3>Participation in projects</h3>
                </div>
                <Slider
                    slider_options={{
                        slider_type: Slider_Type.HORIZONTAL,
                        infinite_type: Infinite_Type.INFINITE,
                        slider_back_type: SliderBack_Type.FULL_BLACK,
                        slider_element_type: SliderElement_Type.DEFAULT
                    }}
                    pagination={{
                        is: true,
                        location:Slider_Type.HORIZONTAL
                    }}
                    swipe={true}
                    gap={20}
                    autoplay={{
                        autoplay: true,
                        swipe: true,
                        delay: 3000,
                        smooth: false
                    }}
                    progressbar={{
                        appear: false,
                        position: ISliderProgressBarPosition.LEFT_BOTTOM,
                        direction: ISliderProgressBarDirection.HORIZONTAL
                    }}
                    focus={'no'}
                    arrows={{
                        direction: Slider_Type.HORIZONTAL,
                        is: true
                    }}
                    elements_on_screen={3}
                    title={''}
                    width={'stretched'}>
                    <SliderElement title={''}>
                        <div/>
                    </SliderElement>
                    <SliderElement title={''}>
                        <div/>
                    </SliderElement>
                    <SliderElement title={''}>
                        <div/>
                    </SliderElement>
                    <SliderElement title={''}>
                        <div/>
                    </SliderElement>
                    <SliderElement title={''}>
                        <div/>
                    </SliderElement>
                </Slider>
            </div>
            <AboutMePart/>
        </div>
    );
};

export default ProjectsBlock;