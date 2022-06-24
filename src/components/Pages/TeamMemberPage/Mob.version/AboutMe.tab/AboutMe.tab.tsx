import React, {useContext} from 'react';
import { Link } from 'react-router-dom'

import './AboutMe.tab.scss'

import {MobVerMemberContext, tab_state} from "../Mob.version";
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

import {Array_by_number} from "../../../../../Utils/Func/Array_by_number";


interface IAboutMeTab {
    tabCallback: (i:tab_state) => void
}

const AboutMeTab = ({ tabCallback }:IAboutMeTab) => {

    const memberContext = useContext(MobVerMemberContext)

    return (
        <div className={'about-me-tab'}>
            <div className={'about-me-tab_projects'}>
                <div className={'about-me-tab_projects-title'}>
                    <h4>Participation in projects</h4>
                </div>
                <Slider
                    slider_options={{
                        slider_type: Slider_Type.HORIZONTAL,
                        slider_element_type:SliderElement_Type.DEFAULT,
                        infinite_type: Infinite_Type.INFINITE,
                        slider_back_type: SliderBack_Type.DEFAULT
                    }}
                    pagination={{
                        is: false,
                        location: Slider_Type.HORIZONTAL
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
                        is: false
                    }}
                    elements_on_screen={1}
                    title={''}
                    width={'stretched'}>
                    {
                        memberContext?.participation_in_projects.map(prjc => (
                            <SliderElement title={''} key={prjc.id}>
                                <Link to={`/projects/${prjc.id}`}>
                                    <div style={{ backgroundImage: `url(${prjc.imgSrc})` }}></div>
                                </Link>
                            </SliderElement>
                        ))
                    }
                </Slider>
            </div>
            <div className={'about-me-tab_my-works'}>
                <div className={'about-me-tab_my-works-title'}>
                    <h4>My Works</h4>
                </div>
                <div className={'about-me-tab_works'}>
                    {
                        Array_by_number(3).map(item => (
                            <div key={memberContext?.my_works[item].id || item} className={['about-me-tab_works-item',
                            item == 2 ? 'about-me-tab_works-item-last' : ''].join(' ')}
                                 onClick={() => tabCallback('gallery')}
                                 style={{ backgroundImage: `url(${ memberContext?.my_works[item].imgSrc })` }}>
                            </div>
                        ))
                    }

                    <div className={'about-me-tab_works-load-more'} onClick={() => tabCallback('gallery')}>
                        <button>
                            <span>load more</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeTab;