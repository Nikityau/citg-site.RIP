import React from 'react';

import ProjectsBlock from "./Projects.block/Projects.block";
import DevBlock from "./Dev.block/Dev.block";
import CompetitionBlock from "./Сompetition.block/Competition.block";

import './Projects.page.scss'

function ProjectsPage() {
  return (
    <div className={'projects-page-container'}>
        <div className={'projects-page-container_inner'}>
            <ProjectsBlock/>
            {/*<CompetitionBlock/>*/}
            <DevBlock/>
        </div>
    </div>
  );
}

export default ProjectsPage;
