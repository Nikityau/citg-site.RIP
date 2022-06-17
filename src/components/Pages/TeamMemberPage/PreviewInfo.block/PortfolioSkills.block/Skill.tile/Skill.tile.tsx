import React from 'react';

export interface ISkillsTile {
    skill: string
}

import '../Software.skills.tile/Software.skills.tile.scss'

interface ISkillTile extends ISkillsTile {
    onHover?: (e) => void
    onHoverEnd?: (e) => void
}

const SkillTile = ({ skill, onHover, onHoverEnd }:ISkillTile) => {
    return (
        <div className={'skills-tile'} onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
            <div className={'skill-tile_skill'}>
                <span>{ skill }</span>
            </div>
        </div>
    );
};

export default SkillTile;