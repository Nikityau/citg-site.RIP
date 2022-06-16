import React from 'react';

import {Img} from "../../../../../../SynteticData/Syntetic.data.type";

import './Software.skills.tile.scss'


export interface ISoftwareSkills {
    skills: Img[]
}

const SoftwareSkillsTile = ({ skills }:ISoftwareSkills) => {
    return (
        <div className={'skills-tile'}>
            <div className={'software-skills-tile_tile'}>
                {
                    skills.map(skill => {
                        return (
                            <div key={skill.id} className={'software-skills-tile_skill'}>
                                <img src={skill.imgSrc} alt={''}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SoftwareSkillsTile;