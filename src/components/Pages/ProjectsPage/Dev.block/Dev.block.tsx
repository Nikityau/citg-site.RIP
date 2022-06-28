import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Dev.block.scss'

import {IProjectsBlock} from "../Projects.block/Projects.block";

const DevBlock = ({ projects }:IProjectsBlock) => {

    return (
        <div className={'dev-block'}>
            <div className={'dev-block_title'}>
                <BlockTitle title={'03'} subtitle={'Проекты в разработке'}/>
            </div>
            <div className={'dev-block_dev-projects'}>
                {
                    projects?.map(project => (
                        <ProjectCard key={project.id}
                            id={project.id}
                            name={project.title}
                            img={project.main_img}
                            text={project.description}
                            project={ProjectType.IN_DEVELOPING}/>
                    ))
                }
            </div>
        </div>
    );
};

export default DevBlock;