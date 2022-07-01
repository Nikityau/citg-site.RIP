import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import MyWorksHeader from "./MyWorks.header/MyWorks.header";

import {CiTG_API} from "../../../API/CiTG_API";

import {MemberInfo, MemberWorksInfo, Work} from "../../../SynteticData/Syntetic.data.type";

import './MyWorks.page.scss'
import MyWorksCurrent from "./MyWorks.current/MyWorks.current";
import MyWorksAddonInfo from "./MyWorks.addonInfo/MyWorks.addonInfo";
import {getIndexes} from "../../../Utils/getIndexes";

const MyWorksPage = () => {
    const params = useParams()

    const [man, setMan] = useState<MemberInfo>(null)
    const [works, setWorks] = useState<MemberWorksInfo>(null)

    const [currentWork, setCurrentWork] = useState<Work>(null)
    const [nextWork, setNextWork] = useState<Work>(null)

    useEffect(() => {
        (async () => {
            const resp_man = await CiTG_API.getMemberById(params['man_id'])
            const resp_works = await CiTG_API.getMemberAllWorks(params['man_id'])

            setWorks(resp_works)
            setMan(resp_man)
        })()
    }, [params['man_id'], params['work_id']])
    useEffect(() => {
        goToNextWork(params['work_id'])
    }, [works])

    const goToNextWork = (next_work_id:string) => {
        if(!next_work_id) return;

        const indexes = getIndexes(works?.all_works_by_name || [], next_work_id)

        if(indexes.nextIndex == -1 || indexes.currentIndex == -1) return

        setCurrentWork(works.all_works_by_name[indexes.currentIndex])
        setNextWork(works.all_works_by_name[indexes.nextIndex])
    }

    return (
        <div className={'my-works'}>
            <MyWorksHeader man={man}/>
            <div className={'my-works_works-container'}>
                <MyWorksCurrent work={currentWork}/>
                <MyWorksAddonInfo
                    currentWork={currentWork}
                    nextWork={nextWork}
                    goToNext={goToNextWork}
                />
            </div>
        </div>
    );
};

export default MyWorksPage;