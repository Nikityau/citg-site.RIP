import React from 'react';

import {IPortfolioCard} from "./Portfolio.card.interface";

import './Posrtofolio.card.scss'

import mountain_back from '../../../../../assets/images/portfolio/moutain-back.png'
import arrow_circle from '../../../../../assets/icons/aroow-circle.svg'

import ImageLink from "../../../../UI/ImageLink/ImageLink";

const PortfolioCard = (
    {
        full_name,
        skills,
        social_media,
        pdf_portfolio_link,
        photo
    }:IPortfolioCard
) => {

    return (
        <div className={'portfolio-card'}>
            <div className={'portfolio-card__mountain-back'}>
                <img src={mountain_back} alt={'img'}/>
            </div>
            <div className={'portfolio-card__blackout'}/>
            <div className={'portfolio-card_summary-download'}>
               <a href={pdf_portfolio_link} target={'_blank'}>
                   <div className={'portfolio-card_summary-icon'}>
                       <img src={arrow_circle} alt={'img'}/>
                   </div>
                   <div className={'portfolio-card_download-wrapper'}>
                       <div className={'portfolio-card_download'}>
                           <span>Summary</span>
                       </div>
                   </div>
               </a>
            </div>
            <div className={'portfolio-card_portfolio'}>
                <div className={'portfolio-card_photo'}>
                    <img src={photo} alt={'img'}/>
                </div>
                <div className={'portfolio-card_data'}>
                    <h4>{ full_name }</h4>
                    <p>{ skills.join(', ') }</p>
                </div>
                <div className={'portfolio-card_socials'}>
                    {
                        social_media.map(media => {
                            return (
                                <ImageLink key={media.link} img={media.img} link={media.link}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;