import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";

import './Projects.block.scss'

const ProjectsBlock = () => {
    return (
        <div className={'projects-block'}>
            <div className={'projects-block_title'}>
                <BlockTitle title={'01'} subtitle={'Реализованые проекты'}/>
            </div>
            <div className={'projects-block_projects-container'}>

            </div>
        </div>
    );
};

export default ProjectsBlock;