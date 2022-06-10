import React from 'react';
import SupportedDevicesPart from "./SupportedDevices.part/SupportedDevices.part";
import ProjectLinkPart from "./ProjectLinks.part/ProjectLink.part";
import Slider from "../../../../Lib/Slider/Slider";
import SliderElement from "../../../../Lib/Slider/Slider.element/Slider.element";

import './Description.block.scss'

import slider_img_1 from '../../../../assets/images/projects/img_1.png'
import slider_img_2 from '../../../../assets/images/projects/img_2.jpg'
import slider_img_3 from '../../../../assets/images/projects/img_3.png'

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

const DescriptionBlock = () => {
    return (
        <div className={'description-block'}>
            <div className={'description-block_description'}>
                <h3>Description</h3>
                <p>
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for
                    departure, but beware as one will be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for
                    departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by
                    completing all tasks or discovering and voting the impostor off the ship. Play online or over local
                    WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will
                    be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                </p>
            </div>
            <div className={'description-block_slider'}>
                <div className={'description-block_slider-title'}>
                    <h3>Screenshots</h3>
                </div>
                <div className={'description-block_slider-container'}>
                    <Slider
                        slider_options={{
                            slider_type: Slider_Type.HORIZONTAL,
                            slider_back_type: SliderBack_Type.DEFAULT,
                            infinite_type: Infinite_Type.INFINITE,
                            slider_element_type: SliderElement_Type.DEFAULT
                        }}
                        pagination={{
                            location: Slider_Type.HORIZONTAL,
                            is: true
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
                            appear:false,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM,
                            direction: ISliderProgressBarDirection.HORIZONTAL
                        }}
                        focus={'no'}
                        arrows={true}
                        elements_on_screen={3}
                        width={'stretched'}
                        title={''}>
                        <SliderElement title={''}>
                            <div style={{backgroundImage: `url(${slider_img_1})`}}/>
                        </SliderElement>
                        <SliderElement title={''}>
                            <div style={{backgroundImage: `url(${slider_img_2})`}}/>
                        </SliderElement>
                        <SliderElement title={''}>
                            <div style={{backgroundImage: `url(${slider_img_3})`}}/>
                        </SliderElement>
                    </Slider>
                </div>
            </div>
            <div className={'description-block_another-info'}>
                <SupportedDevicesPart/>
                <ProjectLinkPart/>
            </div>
        </div>
    );
};

export default DescriptionBlock;