import React from 'react';
import {Link} from "react-router-dom";

import './Member.card.scss'

export interface IMemberCard {
    photo: string,
    full_name: string,
    skills: string[]
    id: string,
    onClick?: () => void
}

const MemberCard = ({full_name,skills, photo, id, onClick}:IMemberCard) => {
    return (
        <div className={'member-card'} onClick={onClick}>
            <Link to={`/team/${id}`}>
                <div className={'member-card-naebka'}/>
                <div className={'member-card_photo'}>
                    <img src={photo} alt={'img'}/>
                </div>
                <div className={'member-card_description'}>
                    <h5>{ full_name }</h5>
                    <p>{ skills.join(', ') }</p>
                </div>
                <div className={'member-card_button'} onClick={onClick}>
                        <span>show</span>
                        <span>more</span>
                </div>
            </Link>
        </div>
    );
};

export default MemberCard;