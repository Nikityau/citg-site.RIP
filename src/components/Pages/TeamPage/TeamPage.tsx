import React, {useContext, useEffect, useState} from 'react';

import MemberCard from "./Member.card/Member.card";

import {CiTG_API} from "../../../API/CiTG_API";

import './Team.page.scss'

import {MemberMiniInfo} from "../../../SynteticData/Syntetic.data.type";

import {AppContext, Browser} from "../../App/App";
import {GoUp} from "../../../Utils/GoUp";


const TeamPage = () => {
    const appContext = useContext(AppContext)

    const [team, setTeam] = useState<MemberMiniInfo[]>(null)

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getTeam();
            setTeam(data)
        })()
    }, [])

    const Up = async () => {
        await GoUp()
    }

    return (
        <div className={'team-page'}>
            <div className={
                appContext.browser === Browser.SAFARI
                    ? 'team-page__gradient-purple_Safari'
                    : 'team-page__gradient-purple_Default'
            }/>
            <div className={
                appContext.browser === Browser.SAFARI
                    ? 'team-page__gradient-red_Safari'
                    : 'team-page__gradient-red_Default'
            }/>
            <div className={'team-page_container'}>
                <div className={'team-page_title'}>
                    <h1>О Команде</h1>
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
                                        id={member.id}
                                        onClick={Up}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPage;