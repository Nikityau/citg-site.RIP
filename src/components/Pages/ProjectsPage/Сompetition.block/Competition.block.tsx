import React from 'react';

import './Competition.block.scss'
import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";
import citg_plug from "../../../../assets/icons/citg-icons.svg";

const CompetitionBlock = () => {
    return (
        <div className={'competition-block'}>
            <div className={'competition-block_title'}>
                <BlockTitle title={'02'}
                            subtitle={'Конкурсные работы'}/>
            </div>
            <div className={'competition-block_projects-list'}>
                <ProjectCard id={`syntetic-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'citg-plug'}
                             img={citg_plug}
                             text={'text'}
                             project={ProjectType.COMPETITION}/>
                <ProjectCard id={`syntetic-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'citg-plug'}
                             img={citg_plug}
                             text={'text'}
                             project={ProjectType.COMPETITION}/>
                <ProjectCard id={`syntetic-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'citg-plug'}
                             img={citg_plug}
                             text={'text'}
                             project={ProjectType.COMPETITION}/>
            </div>
        </div>
    );
};

export default CompetitionBlock;