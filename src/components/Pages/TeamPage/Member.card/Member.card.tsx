import React from 'react';

import './Member.card.scss'

import {Link} from "react-router-dom";
import {GoUp} from "../../../../Utils/GoUp";

export interface IMemberCard {
    photo: string,
    full_name: string,
    skills: string[]
    link: string
}

const MemberCard = ({full_name,skills, photo, link}:IMemberCard) => {
    const Up = async () => {
        await GoUp()
    }

    return (
        <div className={'member-card'}>
            <Link to={`/team/${link}`}>
                <div className={'member-card_photo'}>
                    <img src={photo} alt={'img'}/>
                </div>
                <div className={'member-card_description'}>
                    <h5>{ full_name }</h5>
                    <p>{ skills.join(', ') }</p>
                </div>
                <div className={'member-card_button'} onClick={Up}>
                        <span>show</span>
                        <span>more</span>
                </div>
            </Link>
        </div>
    );
};

export default MemberCard;