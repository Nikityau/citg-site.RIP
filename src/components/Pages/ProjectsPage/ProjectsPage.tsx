import React from 'react';

import PurpleBackground from '../../UI/Background/PurpleBackground/PurpleBackground';
import ProjectsBlock from "./Projects.block/Projects.block";

import './Projects.page.scss'

function ProjectsPage() {
  return (
    <div className={'projects-page-container'}>
        <div className={'projects-page-container_inner'}>
            <ProjectsBlock/>
        </div>
    </div>
  );
}

export default ProjectsPage;
