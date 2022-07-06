import React from 'react';

import PortfolioSkillsBlock from "./PortfolioSkills.block/PortfolioSkills.block";
import PortfolioCard from "./Portfolio.card/Portfolio.card";
import AwardsBlock from "./Awards.block/Awards.block";

import {MemberInfo} from "../../../../SynteticData/Syntetic.data.type";

import './PreviewInfo.block.scss'

import img_member from '../../../../assets/images/team-member/ded.png'

import vk_icon from '../../../../assets/icons/socials/vk-white.svg'
import tg_icon from '../../../../assets/icons/socials/telegram-white.svg'
import be_icon from '../../../../assets/icons/socials/be-white.svg'

interface IPreviewInfoBlock {
    memberInfo:MemberInfo
}

const PreviewInfoBlock = ({ memberInfo }:IPreviewInfoBlock) => {
    return (
        <div className={'preview-member-info-block'}>
            <div className={'preview-member-info-block_container'}>
                <PortfolioCard
                    full_name={memberInfo?.full_name || 'Name Surname'}
                    skills={memberInfo?.skills || ['skill_1', 'skill_2']}
                    social_media={memberInfo?.social_links || []}
                    photo={memberInfo?.photo?.imgSrc || ''}
                    pdf_portfolio_link={memberInfo?.pdf_portfolio_link || ''}
                    id={''}
                />
                <div className={'preview-member-info-block_skill-n-awards'}>
                    <PortfolioSkillsBlock skills={memberInfo?.skills || []}
                                    software={memberInfo?.software || []}/>
                    <AwardsBlock images={memberInfo?.achievement_n_awards || []}/>
                </div>
            </div>
        </div>
    );
};

export default PreviewInfoBlock;