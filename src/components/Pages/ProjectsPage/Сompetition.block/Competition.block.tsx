import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Competition.block.scss'

import {IProjectsBlock} from "../Projects.block/Projects.block";

const CompetitionBlock = ({ projects }:IProjectsBlock) => {

    return (
        <div className={'competition-block'}>
            <div className={'competition-block_title'}>
                <BlockTitle title={'02'}
                            subtitle={'Конкурсные работы'}/>
            </div>
            <div className={'competition-block_projects-list'}>
                {
                    projects?.map(project => (
                        <ProjectCard key={project.id}
                            id={project.id}
                            name={project.title}
                            img={project.main_img}
                            text={project.description}
                            project={ProjectType.COMPETITION}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CompetitionBlock;