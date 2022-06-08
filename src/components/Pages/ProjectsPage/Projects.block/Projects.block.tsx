import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Projects.block.scss'

import citg_plug from '../../../../assets/icons/citg-icons.svg'

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