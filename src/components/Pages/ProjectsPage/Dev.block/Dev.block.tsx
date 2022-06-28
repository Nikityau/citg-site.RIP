import React, {useEffect} from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Dev.block.scss'

import plug from '../../../../assets/icons/citg-icons.svg'
import {Array_by_number} from "../../../../Utils/Func/Array_by_number";

const DevBlock = () => {

    useEffect(() => {
        console.log('dev')
    })

    return (
        <div className={'dev-block'}>
            <div className={'dev-block_title'}>
                <BlockTitle title={'03'} subtitle={'Проекты в разработке'}/>
            </div>
            <div className={'dev-block_dev-projects'}>
                {
                    Array_by_number(4).map(item => (
                        <ProjectCard key={item}
                                     id={`syntetic-project-id-${item}`}
                                     name={'Citg-plug'}
                                     text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                                     img={plug} project={ProjectType.IN_DEVELOPING}/>
                    ))
                }
            </div>
        </div>
    );
};

export default DevBlock;