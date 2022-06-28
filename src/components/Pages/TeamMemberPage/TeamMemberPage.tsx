import React, {useEffect, useState, createContext} from 'react';
import {useParams} from 'react-router-dom'

import ProjectsBlock from "./Projects.block/Projects.block";
import PreviewInfoBlock from "./PreviewInfo.block/PreviewInfo.block";
import MobVersion from "./Mob.version/Mob.version";

import {MemberInfo} from "../../../SynteticData/Syntetic.data.type";

import {CiTG_API} from "../../../API/CiTG_API";

import './TeamMember.page.scss'

import member_page_back from '../../../assets/images/member-page-back.png'


export const TeamMemberContext = createContext(null)

function TeamMemberPage() {
    const params = useParams()

    const [member, setMember] = useState<MemberInfo>(null)

    useEffect(() => {
        (async () => {
            const member_data = await CiTG_API.getMemberById(params['id'])
            setMember(member_data)
        })()
    }, [])

    return (
        <div className={'team-member-page'}>
            {
                window.screen.width >= 500 &&
                <>
                    <div className={'team-member-page__back'}>
                        <img src={member_page_back} alt={'img'}/>
                    </div>
                    <div className={'team-member-page__gradient-gray'}/>
                    <div className={'team-member-page_portfolio'}>
                        <div className={'team-member-page_inner-container'}>
                            <PreviewInfoBlock memberInfo={member}/>
                            <ProjectsBlock
                                participation_in_projects={member?.participation_in_projects || []}
                                my_works={member?.my_works || []}
                            />
                        </div>
                        <div className={'team-member-page__back-gradient-blue'}/>
                        <div className={'team-member-page__back-gradient-purple'}/>
                    </div>
                </>
            }
            <MobVersion memberInfo={member}/>
        </div>
    );
}

export default TeamMemberPage;
