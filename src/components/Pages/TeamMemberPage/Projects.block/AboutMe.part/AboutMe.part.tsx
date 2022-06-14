import React from 'react';

import './AboutMe.part.scss'

import img_plug from '../../../../../assets/images/citg_plug_rectangle.png'

const AboutMePart = () => {
    return (
        <div className={'about-me'}>
            <div className={'about-me_title'}>
                <h4>My Works</h4>
            </div>
            <div className={'about-me_works'}>
                <div className={'about-me-template-item about-me_template-item-1'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-2'}>
                     <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-3'}>
                    <img src={img_plug}/> 
                </div>
                <div className={'about-me-template-item about-me_template-item-4'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-5'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-6'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-7'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-8'}>
                    <img src={img_plug}/>
                </div>
                <div className={'about-me-template-item about-me_template-item-9'}>
                    <img src={img_plug}/>
                </div>
            </div>
        </div>
    );
};

export default AboutMePart;