import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import PopUpGallery from "../../../Lib/PopUpGallery/PopUpGallery";
import PreviewBlock from "./Preivew.block/Preview.block";
import DescriptionBlock from "./Description.block/Description.block";

import './Project.page.scss'

import {ProjectInfo} from "../../../SynteticData/Syntetic.data.type";

import {CiTG_API} from "../../../API/CiTG_API";
import {AppContext, Browser} from "../../App/App";

function ProjectPage() {
    const appContext = useContext(AppContext)

    const params = useParams()
    const [projectInfo, setProjectInfo] = useState<ProjectInfo>(undefined)

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getProjectById(params['id'])
            setProjectInfo(data)
        })()
    }, [])

    return (
        <div className={['project-page',
            appContext.browser === Browser.SAFARI
                ? 'project-pageBefore_Safari'
                : 'project-pageBefore_Default'
        ].join(' ')}>
            <PopUpGallery images={projectInfo?.img_arr || []}/>
            <PreviewBlock/>
            <div className={['project-page_inner-container-wrapper',
                appContext.browser !== Browser.SAFARI
                    ? 'project-page_inner-container-wrapperBefore_Safari'
                    : 'project-page_inner-container-wrapperBefore_Default'
            ].join(' ')}>
                <div className={'project-page_inner-container'}>
                    <DescriptionBlock images={projectInfo?.img_arr || []}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
