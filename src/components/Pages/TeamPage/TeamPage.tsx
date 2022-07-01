import React, {useEffect, useState} from 'react';

import MemberCard from "./Member.card/Member.card";

import {GoUp} from "../../../Utils/GoUp";

import {CiTG_API} from "../../../API/CiTG_API";

import './Team.page.scss'

import {MemberMiniInfo} from "../../../SynteticData/Syntetic.data.type";


const TeamPage = () => {
    const [team, setTeam] = useState<MemberMiniInfo[]>(null)

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getTeam();
            setTeam(data)
        })()
    }, [])

    return (
        <div className={'team-page'}>
           {/* <div className={'team-page__gradient-purple'}/>
            <div className={'team-page__gradient-red'}/>*/}
            <div className={'team-page_container'}>
                <div className={'team-page_title'}>
                    <h1>About team</h1>
                    <p>Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из разных сфер,
                        многие из них являются бывшими учениками</p>
                </div>
                <div className={'team-page_team'}>
                    {
                        team?.map(member => (
                            <MemberCard key={member.id}
                                photo={member.img}
                                full_name={member.full_name}
                                skills={member.skills}
                                id={member.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPage;