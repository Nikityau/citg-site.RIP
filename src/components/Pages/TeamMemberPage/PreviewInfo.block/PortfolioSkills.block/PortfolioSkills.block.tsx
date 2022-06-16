import React from 'react';

import SoftwareSkillsTile from "./Software.skills.tile/Software.skills.tile";
import SkillTile from "./Skill.tile/Skill.tile";

import {Img} from "../../../../../SynteticData/Syntetic.data.type";

import './PortfolioSkills.block.scss'

import figma_img from '../../../../../assets/icons/project/figma.svg'
import ai_img from '../../../../../assets/icons/project/ai.svg'
import ps_img from '../../../../../assets/icons/project/ps.svg'


interface IPortfolioSkillsBlock {
    skills: string[],
    software: Img[]
}

const PortfolioSkillsBlock = ({skills, software}:IPortfolioSkillsBlock) => {
    return (
        <div className={'portfolio-info-block'}>
            <div className={'portfolio-info-block_skills-container'}>
                <div className={'portfolio-info-block_skill-tittle'}>
                    <h5>Skills</h5>
                </div>
                <div className={'portfolio-info-block_skills'}>
                    <SoftwareSkillsTile
                        skills={software || []}/>
                    {
                        skills.map((skill, index) => (
                            <SkillTile key={index} skill={skill}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioSkillsBlock;