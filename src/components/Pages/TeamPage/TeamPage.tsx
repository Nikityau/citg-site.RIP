import React from 'react';

import MemberCard from "./Member.card/Member.card";

import './Team.page.scss'

import ded_img from '../../../assets/images/team-member/ded.png'

const TeamPage = () => {
    return (
        <div className={'team-page'}>
            <div className={'team-page_container'}>
                <div className={'team-page_title'}>
                    <h1>About team</h1>
                    <p>Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из разных сфер,
                        многие из них являются бывшими учениками</p>
                </div>
                <div className={'team-page_team'}>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                    <MemberCard photo={ded_img} link={'001'} full_name={'Ded A.K.A Byiniй'}
                                skills={['illustrator', 'UI/UX-designer']}/>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;