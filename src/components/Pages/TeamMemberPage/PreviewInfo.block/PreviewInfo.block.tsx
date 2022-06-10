import React from 'react';

import PortfolioInfoBlock from "./PortfolioInfo.block/PortfolioInfo.block";
import PortfolioCard from "./Portfolio.card/Portfolio.card";

import './PreviewInfo.block.scss'

import img_member from '../../../../assets/images/team-member/ded.png'

import vk_icon from '../../../../assets/icons/socials/vk-white.svg'
import tg_icon from '../../../../assets/icons/socials/telegram-white.svg'
import be_icon from '../../../../assets/icons/socials/be-white.svg'

const PreviewInfoBlock = () => {
    return (
        <div className={'preview-member-info-block'}>
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
            <PortfolioInfoBlock/>
        </div>
    );
};

export default PreviewInfoBlock;