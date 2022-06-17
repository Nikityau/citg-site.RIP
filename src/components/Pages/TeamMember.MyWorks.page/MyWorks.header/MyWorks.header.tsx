import React from 'react';

import {MemberInfo} from "../../../../SynteticData/Syntetic.data.type";

import './MyWorks.header.scss'

import header_back_img from "../../../../assets/images/my-works-back.png";

interface IMyWorksHeader {
    man: MemberInfo
}

const MyWorksHeader = ({ man }: IMyWorksHeader) => {
    return (
        <header className={'my-works_header'}
                style={{ backgroundImage: `url(${header_back_img})` }}>
            <div className={'my-works__header-gradient-gray'}/>
            <div className={'my-works_member-info'}>
                <div className={'my-works_member-img'}>
                    <img src={man?.photo?.imgSrc || ''} alt={'img'}/>
                </div>
                <div className={'my-works_member-data'}>
                    <div className={'my-works_member-full-name'}>
                        <h3>{ man?.full_name || "Name Surname" }</h3>
                    </div>
                    <div className={'my-works_member-skills'}>
                        <span> { man?.skills.join(' ') } </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MyWorksHeader;