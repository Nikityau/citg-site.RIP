import React, {useEffect} from 'react';

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import ProjectCard, {ProjectType} from "../Project.card/Project.card";

import './Competition.block.scss'

import citg_plug from "../../../../assets/icons/citg-icons.svg";
import {Array_by_number} from "../../../../Utils/Func/Array_by_number";

const CompetitionBlock = () => {


    useEffect(() => {
        console.log('comp')
    })

    return (
        <div className={'competition-block'}>
            <div className={'competition-block_title'}>
                <BlockTitle title={'02'}
                            subtitle={'Конкурсные работы'}/>
            </div>
            <div className={'competition-block_projects-list'}>
                {
                    Array_by_number(4).map(item => (
                        <ProjectCard key={item}
                            id={'synt'}
                            name={'citg-plug'}
                            img={citg_plug}
                            text={'text'}
                            project={ProjectType.COMPETITION}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CompetitionBlock;