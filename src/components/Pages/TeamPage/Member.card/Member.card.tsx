import React from 'react';

import './Member.card.scss'
import {Link} from "react-router-dom";

export interface IMemberCard {
    photo: string,
    full_name: string,
    skills: string[]
    link: string
}

const MemberCard = ({full_name,skills, photo, link}:IMemberCard) => {
    return (
        <div className={'member-card'}>
            <div className={'member-card_photo'}>
                <img src={photo} alt={'img'}/>
            </div>
            <div className={'member-card_description'}>
                <h5>{ full_name }</h5>
                <p>{ skills.join(', ') }</p>
            </div>
            <div className={'member-card_button'}>
                <Link to={`/team/${link}/${full_name}`}>
                    <span>show</span>
                    <span>more</span>
                </Link>
            </div>
        </div>
    );
};

export default MemberCard;