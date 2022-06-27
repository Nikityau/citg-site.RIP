import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom'

import './Projects.block.scss'

import {Array_by_number} from "../../../../Utils/Func/Array_by_number";

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";

const Slider = React.lazy(() => import('../../../../Lib/Slider/Slider'))

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
import ProjectCard, {ProjectType} from "../Project.card/Project.card";
import Party from "../../../UI/Background/Party/Party";
import {GoUp} from "../../../../Utils/GoUp";

import plug from "../../../../assets/icons/citg-icons.svg";
import citg_plug from '../../../../assets/images/citg_plug.png'

const ProjectsBlock = () => {
    const projectsBlock = useRef<HTMLDivElement>(null)
    const [isExpand, setIsExpand] = useState<boolean>(false)

    const changeExpand = () => {
        setIsExpand(prev => !prev)

        if(!isExpand) {

            const lastChild = projectsBlock.current.children[projectsBlock.current.children.length - 1] as HTMLElement
            const h = lastChild.offsetTop + lastChild.clientHeight

            projectsBlock.current.style.height = h + 20 + 'px'

        } else {
            const lastChild = projectsBlock.current.children[2] as HTMLElement
            const h = lastChild.offsetTop + lastChild.clientHeight

            GoUp()

            setTimeout(() => {
                projectsBlock.current.style.height = h + 20 + 'px'
            }, 300)
        }
    }

    return (
        <div className={'projects-block'}>
            <div className={'projects-block_title'}>
                <BlockTitle title={'01'} subtitle={'Реализованые проекты'}/>
            </div>
            {
                window.screen.width >= 500 &&
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
                        arrows={{
                            direction:Slider_Type.HORIZONTAL,
                            is: true
                        }}
                        elements_on_screen={1}
                        title={''}
                        width={'stretched'}>
                        <SliderBoxElements
                            gap={20}
                            tiles={{
                                x: 3,
                                y: 2
                            }}>
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                        </SliderBoxElements>

                        <SliderBoxElements
                            gap={20}
                            tiles={{
                                x: 3,
                                y: 2,
                            }}>

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                        </SliderBoxElements>

                        <SliderBoxElements
                            gap={20}
                            tiles={{
                                x: 3,
                                y: 2
                            }}>
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />

                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                                             name={'Citg-plug'}
                                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                             img={plug} project={ProjectType.READY} />
                        </SliderBoxElements>
                    </Slider>
                </div>
            }
            <div className={'projects-block-mob-ver'}>
                <div ref={projectsBlock} className={['projects-block-mob-ver_container', isExpand ? '' : ''].join(' ')}>
                    <div className={'projects-block-animations'}>
                        <div className={'projects-block-animations_ball-1'}/>
                        <div className={'projects-block-animations_ball-2'}/>
                    </div>
                    {
                        Array_by_number(10).map((item, index) => (
                            <div key={index} className={'projects-block-mob-ver_el'}>
                                <Link to={`/projects/synt-${index}`}>
                                    <img src={citg_plug}/>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className={'projects-block-mob-ver_button'}>
                    <button onClick={changeExpand}>
                       <span>show more</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBlock;