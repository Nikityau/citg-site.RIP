import React from 'react';
import { Link, useParams } from 'react-router-dom'

import {Img} from "../../../../../SynteticData/Syntetic.data.type";

import './AboutMe.part.scss'

import img_plug from '../../../../../assets/images/citg_plug_rectangle.png'
import {GoUp} from "../../../../../Utils/GoUp";

interface IAboutMePart {
    works: Img[]
}

const AboutMePart = ({works}:IAboutMePart) => {
    const params = useParams()

    const getTemplateType = (index):string => {
        if(index % 10 === 1) return 'about-me_template-item-1'
        if(index % 10 === 2) return 'about-me_template-item-2'
        if(index % 10 === 3) return 'about-me_template-item-3'
        if(index % 10 === 4) return 'about-me_template-item-4'
        if(index % 10 === 5) return 'about-me_template-item-5'
        if(index % 10 === 6) return 'about-me_template-item-6'
        if(index % 10 === 7) return 'about-me_template-item-7'
        if(index % 10 === 8) return 'about-me_template-item-8'
        if(index % 10 === 9) return 'about-me_template-item-9'


        return ''
    }

    const Up = async () => {
        await GoUp()
    }

    return (
        <div className={'about-me'}>
            <div className={'about-me_title'}>
                <h4>My Works</h4>
            </div>
            <div className={'about-me_works'}>
                {
                    works?.map((work, index) => (
                        <div key={work.id} className={['about-me-template-item',
                            getTemplateType(index + 1)].join(' ')}
                            onClick={Up}
                             style={{ backgroundImage: `url(${work.imgSrc})` }}
                        >
                            <Link to={`/team/${params['id']}/my-works/${work.id}`}>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AboutMePart;