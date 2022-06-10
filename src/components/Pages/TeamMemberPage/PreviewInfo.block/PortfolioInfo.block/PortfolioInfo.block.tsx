import React from 'react';

import SoftwareSkillsTile from "./Software.skills.tile/Software.skills.tile";

import './PortfolioInfo.block.scss'

import figma_img from '../../../../../assets/icons/project/figma.svg'
import ai_img from '../../../../../assets/icons/project/ai.svg'
import ps_img from '../../../../../assets/icons/project/ps.svg'
import SkillTile from "./Skill.tile/Skill.tile";

const PortfolioInfoBlock = () => {
    return (
        <div className={'portfolio-info-block'}>
            <div className={'portfolio-info-block_skills-container'}>
                <div className={'portfolio-info-block_skill-tittle'}>
                    <h5>Skills</h5>
                </div>
                <div className={'portfolio-info-block_skills'}>
                    <SoftwareSkillsTile
                        skills={[
                            {
                                img: ai_img,
                                name: 'adobe_illustrator'
                            },
                            {
                                name: 'adobe_photoshop',
                                img: ps_img,
                            },
                            {
                                name: 'figma',
                                img: figma_img
                            }
                        ]}/>
                    <SkillTile skill={'UI/UX'}/>
                    <SkillTile skill={'illustrator'}/>
                    <SkillTile skill={'illustrator'}/>
                </div>
            </div>
        </div>
    );
};

export default PortfolioInfoBlock;