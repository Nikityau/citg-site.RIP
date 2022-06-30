import React, {useEffect, useState} from 'react';

import ProjectsBlock from "./Projects.block/Projects.block";
import DevBlock from "./Dev.block/Dev.block";
import CompetitionBlock from "./Сompetition.block/Competition.block";

import './Projects.page.scss'

import {Projects} from "../../../SynteticData/Syntetic.data.type";

import {CiTG_API} from "../../../API/CiTG_API";

function ProjectsPage() {
    const [projects, setProjects] = useState<Projects | null>(null)

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getAllProjects()
            setProjects(data)
        })()
    }, [])

  return (
    <div className={'projects-page-container'}>
        <div className={'projects-page-container_inner'}>
            <ProjectsBlock projects={projects?.released_projects || []}/>
            <CompetitionBlock projects={projects?.concourse_projects || []}/>
            <DevBlock projects={projects?.projects_in_developing || []}/>
        </div>
    </div>
  );
}

export default ProjectsPage;
