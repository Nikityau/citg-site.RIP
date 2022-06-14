import React from 'react';

import PortfolioSkillsBlock from "./PortfolioSkills.block/PortfolioSkills.block";
import PortfolioCard from "./Portfolio.card/Portfolio.card";
import AwardsBlock from "./Awards.block/Awards.block";

import './PreviewInfo.block.scss'

import img_member from '../../../../assets/images/team-member/ded.png'

import vk_icon from '../../../../assets/icons/socials/vk-white.svg'
import tg_icon from '../../../../assets/icons/socials/telegram-white.svg'
import be_icon from '../../../../assets/icons/socials/be-white.svg'


const PreviewInfoBlock = () => {
    return (
        <div className={'preview-member-info-block'}>
            <div className={'preview-member-info-block_container'}>
                <PortfolioCard
                    pdf_portfolio_link={''}
                    social_media={[
                        {
                            link: 'https://behance.com',
                            img: be_icon
                        },
                        {
                            link: 'https://telegram.org',
                            img: tg_icon
                        },
                        {
                            link: 'https://vk.com',
                            img: vk_icon
                        }
                    ]}
                    photo={img_member}
                    full_name={'Full Name'}
                    skills={['illustrator', 'UI/UX-designer']}
                    link={''}/>
                <div className={'preview-member-info-block_skill-n-awards'}>
                    <PortfolioSkillsBlock/>
                    <AwardsBlock/>
                </div>
            </div>
        </div>
    );
};

export default PreviewInfoBlock;