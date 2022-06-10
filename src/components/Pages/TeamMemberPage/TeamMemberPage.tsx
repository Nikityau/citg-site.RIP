import React from 'react';

import ProjectsBlock from "./Projects.block/Projects.block";
import PreviewInfoBlock from "./PreviewInfo.block/PreviewInfo.block";

import './TeamMember.page.scss'

import member_page_back from '../../../assets/images/member-page-back.png'

function TeamMemberPage() {
    return (
        <div className={'team-member-page'}>
            <div className={'team-member-page__back'}>
                <img src={member_page_back} alt={'img'}/>
            </div>
            <div className={'team-member-page__gradient-gray'}/>
            <div className={'team-member-page_portfolio'}>
                <PreviewInfoBlock/>
                <ProjectsBlock/>
            </div>
        </div>
    );
}

export default TeamMemberPage;
