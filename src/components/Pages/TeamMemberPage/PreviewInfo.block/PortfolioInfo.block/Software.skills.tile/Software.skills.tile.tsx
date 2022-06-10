import React from 'react';

import './Software.skills.tile.scss'

export interface ISkill {
    name: string
    img: string,
}

export interface ISoftwareSkills {
    skills: ISkill[]
}

const SoftwareSkillsTile = ({ skills }:ISoftwareSkills) => {
    return (
        <div className={'skills-tile'}>
            <div className={'software-skills-tile_tile'}>
                {
                    skills.map(skill => {
                        return (
                            <div key={skill.name} className={'software-skills-tile_skill'}>
                                <img src={skill.img} alt={''}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SoftwareSkillsTile;