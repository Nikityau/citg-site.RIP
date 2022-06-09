import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom'

import PreviewBlock from "./Preivew.block/Preview.block";
import DescriptionBlock from "./Description.block/Description.block";

import './Project.page.scss'
import {CiTG_API} from "../../../API/CiTG_API";
import {readdirSync} from "fs";
import {ProjectInfo} from "../../../SynteticData/Syntetic.data.type";

function ProjectPage() {

    const {id, name} = useParams()
    const [projectInfo, setProjectInfo] = useState<ProjectInfo>(undefined)

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getProjectById(id)
            setProjectInfo(data)
        })()
    }, [])

    return (
        <div className={'project-page'}>
            <PreviewBlock/>
            <div className={'project-page_inner-container'}>
                <DescriptionBlock/>
            </div>
        </div>
    );
}

export default ProjectPage;
