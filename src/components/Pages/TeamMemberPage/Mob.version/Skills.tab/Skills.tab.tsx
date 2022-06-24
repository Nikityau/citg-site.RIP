import React, {useContext} from 'react';

import './Skills.tab.scss'

import {MobVerMemberContext} from "../Mob.version";

import SkillTile from "../../PreviewInfo.block/PortfolioSkills.block/Skill.tile/Skill.tile";
import Slider from "../../../../../Lib/Slider/Slider";
import SliderElement from "../../../../../Lib/Slider/Slider.element/Slider.element";
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

const SkillsTab = () => {

    const memberContext = useContext(MobVerMemberContext)

    return (
        <div className={'skills-tab'}>
            <div className={'skills-tab_skills'}>
                {
                    memberContext?.skills.map(skill => (
                        <SkillTile key={skill} skill={skill}/>
                    ))
                }
            </div>
            <div className={'skills-tab_awards'}>
                <div className={'skills-tab_title'}>
                    <h5>Achievements & Awards</h5>
                </div>
                <div className={'skills-tab_awards-container'}>
                    <Slider
                        slider_options={{
                            slider_back_type:SliderBack_Type.HALF_BLACK,
                            infinite_type:Infinite_Type.INFINITE,
                            slider_type: Slider_Type.SINGLE,
                            slider_element_type: SliderElement_Type.DEFAULT
                        }}
                        pagination={{
                            is: true,
                            location: Slider_Type.HORIZONTAL,
                        }}
                        swipe={true}
                        gap={0}
                        autoplay={{
                            autoplay: true,
                            swipe: true,
                            smooth: false,
                            delay: 3000
                        }}
                        progressbar={{
                            direction: ISliderProgressBarDirection.HORIZONTAL,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM,
                            appear: false
                        }}
                        focus={'no'}
                        arrows={{
                            is: false,
                            direction: Slider_Type.HORIZONTAL
                        }}
                        elements_on_screen={1}
                        title={''}
                        width={'default'}>
                        {
                            memberContext?.achievement_n_awards.map(item => (
                                <SliderElement title={''} key={item.id}>
                                    <div>
                                        <img src={item.imgSrc} alt={'img'}/>
                                    </div>
                                </SliderElement>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SkillsTab;