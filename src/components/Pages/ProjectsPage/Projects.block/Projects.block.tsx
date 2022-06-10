import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";

import './Projects.block.scss'

import Slider from "../../../../Lib/Slider/Slider";
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
import SliderBoxElements from "../../../../Lib/Slider/Slider.box.elements/Slider.box.elements";
import SliderElement from "../../../../Lib/Slider/Slider.element/Slider.element";

const ProjectsBlock = () => {
    return (
        <div className={'projects-block'}>
            <div className={'projects-block_title'}>
                <BlockTitle title={'01'} subtitle={'Реализованые проекты'}/>
            </div>
            <div className={'projects-block_projects-container'}>
                <Slider
                    slider_options={{
                        slider_type: Slider_Type.SINGLE,
                        infinite_type: Infinite_Type.INFINITE,
                        slider_back_type: SliderBack_Type.PARTY,
                        slider_element_type: SliderElement_Type.DEFAULT
                    }}
                    pagination={{
                        is: true,
                        location: Slider_Type.HORIZONTAL
                    }}
                    swipe={true}
                    gap={20}
                    autoplay={{
                        autoplay: true,
                        delay: 3000,
                        smooth: false,
                        swipe: true
                    }}
                    progressbar={{
                        appear: false,
                        direction: ISliderProgressBarDirection.HORIZONTAL,
                        position: ISliderProgressBarPosition.LEFT_BOTTOM
                    }}
                    focus={'no'}
                    arrows={true}
                    elements_on_screen={1}
                    title={''}
                    width={'stretched'}>
                    <SliderBoxElements
                        gap={20}
                        tiles={{
                            x: 3,
                            y: 2
                        }}>
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
                        <SliderElement title={''}>
                            <div/>
                        </SliderElement>
                    </SliderBoxElements>
                    <SliderBoxElements
                        gap={20}
                        tiles={{
                            x: 3,
                            y: 2,
                        }}>
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
                        <SliderElement title={''}>
                            <div/>
                        </SliderElement>
                    </SliderBoxElements>
                    <SliderBoxElements
                        gap={20}
                        tiles={{
                            x: 3,
                            y: 2
                        }}>
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
                        <SliderElement title={''}>
                            <div/>
                        </SliderElement>
                    </SliderBoxElements>
                </Slider>
            </div>
        </div>
    );
};

export default ProjectsBlock;