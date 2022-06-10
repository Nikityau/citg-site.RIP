import React from 'react';

import './PreviewInfo.block.scss'
import PortfolioCard from "./Portfolio.card/Portfolio.card";

import img_member from '../../../../assets/images/team-member/ded.png'

import vk_icon from '../../../../assets/icons/socials/vk-white.svg'
import tg_icon from '../../../../assets/icons/socials/telegram-white.svg'
import be_icon from '../../../../assets/icons/socials/be-white.svg'

const PreviewInfoBlock = () => {
    return (
        <div className={'preview-member-info-block'}>
            <div className={'preview-member-info-block_member-card'}>
                <PortfolioCard pdf_portfolio_link={'https://pdf.com'}
                               social_media={[
                                   {
                                       link: 'https://behance.com',
                                       img: be_icon
                                   },
                                   {
                                       link: 'https://vk.com',
                                       img: vk_icon
                                   },
                                   {
                                       link: 'https://telegram.org',
                                       img: tg_icon
                                   }
                               ]}
                               photo={img_member}
                               full_name={'Ded a.k.a Byiniй'}
                               skills={['UI/UX-design', 'illustrator']}
                               link={''}/>
            </div>
            <div className={'preview-member-info-block_info'}>
                <PreviewInfoBlock/>
            </div>
        </div>
    );
};

export default PreviewInfoBlock;