import React from 'react';

import MemberCard from "./Member.card/Member.card";

//import {GoUp} from "../../../Utils/GoUp";
import {Array_by_number} from "../../../Utils/Func/Array_by_number";

import './Team.page.scss'

import ded_img from '../../../assets/images/team-member/ded.png'



const TeamPage = () => {
   /* const onClick = async () => {
        await GoUp()
    }*/

    return (
        <div className={'team-page'}>
            <div className={'team-page__gradient-purple'}/>
            <div className={'team-page__gradient-red'}/>
            <div className={'team-page_container'}>
                <div className={'team-page_title'}>
                    <h1>About team</h1>
                    <p>Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из разных сфер,
                        многие из них являются бывшими учениками</p>
                </div>
                <div className={'team-page_team'}>

                </div>
            </div>
        </div>
    );
};

export default TeamPage;