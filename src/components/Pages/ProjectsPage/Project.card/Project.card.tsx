import React from 'react';
import {Link} from "react-router-dom";

import './Project.card.scss'

export enum ProjectType {
    READY = 'ready',
    COMPETITION = 'competition',
    IN_DEVELOPING = 'in_developing'
}

interface IDevProjectCard {
    id: string,
    name: string,
    img:string,
    text: string,
    project: ProjectType
}

const ProjectCard = ({ name,img,id, text, project }:IDevProjectCard) => {

    const getClassByProjectType = () => {
        switch (project) {
            case ProjectType.COMPETITION:
            case ProjectType.READY:
                return 'dev-project-card__def'
            case ProjectType.IN_DEVELOPING:
                return 'dev-project-card__in-dev'
            default:
                return 'dev-project-card__def'
        }
    }


    return (
        <div className={['dev-project-card', getClassByProjectType()].join(' ')}>
            <Link to={`/projects/${id}/${name}`}>
                <div className={'dev-project-card_text'}>
                 <h4>{ name }</h4>
                 <p> { text } </p>
                </div>
                <div className={'dev-project-card_img'}>
                    <img src={img} alt={'img'}/>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;