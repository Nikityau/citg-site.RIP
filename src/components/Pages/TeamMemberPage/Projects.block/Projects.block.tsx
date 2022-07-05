import React, {useContext} from 'react';

import AboutMePart from "./AboutMe.part/AboutMe.part";

const Slider = React.lazy(() => import('../../../../Lib/Slider/Slider'))

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

import {MiniInfo} from "../../../../SynteticData/Syntetic.data.type";

import './Projects.block.scss'
import ProjectCard, {ProjectType} from "../../ProjectsPage/Project.card/Project.card";
import {AppContext} from "../../../App/App";
import arrow_circle from "../../../../assets/icons/aroow-circle.svg";

interface IProjectsBlock {
    my_works: MiniInfo[],
    participation_in_projects: MiniInfo[]
}

const ProjectsBlock = ({ participation_in_projects, my_works }:IProjectsBlock) => {
    const appContext = useContext(AppContext)



    return (
        <div className={'projects-portfolio-block'}>
            <div className={'projects-portfolio-block_summary-tablet'}>
                <a href={'google.com'} target={'_blank'}>
                    <div className={'projects-portfolio-block_summary-tablet-wrapper'}>
                        <div className={''}>
                            <span>Summary</span>
                        </div>
                    </div>
                    <div className={'projects-portfolio-block_summary-tablet-arrow'}>
                        <img src={arrow_circle} alt={'img'}/>
                    </div>
                </a>
            </div>
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
                    {
                        participation_in_projects.map(pip => (
                            <SliderElement title={''} key={pip.id}>
                                <ProjectCard
                                    id={pip.id}
                                    name={''}
                                    img={pip.imgSrc}
                                    text={''}
                                    project={ProjectType.READY}/>
                            </SliderElement>
                        ))
                    }
                </Slider>
            </div>
            <AboutMePart works={my_works}/>
        </div>
    );
};

export default ProjectsBlock;