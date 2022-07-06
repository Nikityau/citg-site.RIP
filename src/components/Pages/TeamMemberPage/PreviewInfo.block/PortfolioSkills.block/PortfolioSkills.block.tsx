import React, {useState} from 'react';

import SoftwareSkillsTile from "./Software.skills.tile/Software.skills.tile";
import SkillTile from "./Skill.tile/Skill.tile";

import {Img} from "../../../../../SynteticData/Syntetic.data.type";

import './PortfolioSkills.block.scss'

import {useToggler} from "../../../../customHooks/useToggler";

interface IPortfolioSkillsBlock {
    skills: string[],
    software: Img[]
}

const PortfolioSkillsBlock = ({skills, software}:IPortfolioSkillsBlock) => {
    const [isSkillsPopUpOpen, setIsSkillsPopUpOpen] = useToggler(false)
    const [skillsPopUpPos, setSkillsPopUpPos] = useState<{ x: number, y: number }>(null)

    const onHover = (e) => {
        const target = e.target as HTMLElement;

        setIsSkillsPopUpOpen.On()

        setSkillsPopUpPos({
            x: target.offsetLeft + target.clientWidth,
            y: target.offsetTop + target.clientHeight + 5
        })
    }
    const onHoverEnd = (e) => {
        setIsSkillsPopUpOpen.Off()
    }

    return (
        <div className={'portfolio-info-block'}>
            <div className={'portfolio-info-block_skills-container'}>
                <div className={'portfolio-info-block_skill-tittle'}>
                    <h5>Skills</h5>
                </div>
                <div className={'portfolio-info-block_skills'}>
                    <div className={['skills-pop-up', isSkillsPopUpOpen ? 'skills-pop-up_open' : ''].join(' ')}
                         style={{
                             left: skillsPopUpPos?.x + 'px',
                             top: skillsPopUpPos?.y + 'px',
                             transform: `translateX(-100%)`
                         }}
                    >
                        {
                            skills.map(skill => (
                                <div key={skill} className={'skills-pop-up_skill-tile'}>
                                    <span> { skill } </span>
                                </div>
                            ))
                        }
                    </div>
                    <SoftwareSkillsTile
                        skills={software || []}/>
                    {
                        skills.map((skill, index) => (
                            <SkillTile key={index} skill={skill} onHover={onHover} onHoverEnd={onHoverEnd}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioSkillsBlock;