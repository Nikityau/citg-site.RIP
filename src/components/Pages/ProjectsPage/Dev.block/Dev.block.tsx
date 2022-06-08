import React from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Dev.block.scss'

import plug from '../../../../assets/icons/citg-icons.svg'

const DevBlock = () => {
    return (
        <div className={'dev-block'}>
            <div className={'dev-block_title'}>
                <BlockTitle title={'03'} subtitle={'Проекты в разработке'}/>
            </div>
            <div className={'dev-block_dev-projects'}>
                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'Citg-plug'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             img={plug} project={ProjectType.IN_DEVELOPING} />
                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'Citg-plug'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             img={plug} project={ProjectType.IN_DEVELOPING} />
                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'Citg-plug'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             img={plug} project={ProjectType.IN_DEVELOPING} />
                <ProjectCard id={`syntetic-project-id-${Math.ceil(Math.random() * 1000)}`}
                             name={'Citg-plug'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             img={plug} project={ProjectType.IN_DEVELOPING} />
            </div>
        </div>
    );
};

export default DevBlock;