import React from 'react';

export interface ISkillsTile {
    skill: string
}

import '../Software.skills.tile/Software.skills.tile.scss'

const SkillTile = ({ skill }:ISkillsTile) => {
    return (
        <div className={'skills-tile'}>
            <div className={'skill-tile_skill'}>
                <span>{ skill }</span>
            </div>
        </div>
    );
};

export default SkillTile;