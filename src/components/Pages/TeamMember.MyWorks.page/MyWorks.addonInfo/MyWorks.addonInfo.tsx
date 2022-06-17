import React from 'react';
import { Link, useParams } from 'react-router-dom'

import {GoUp} from "../../../../Utils/GoUp";

import {Work} from "../../../../SynteticData/Syntetic.data.type";

import '../MyWorks.page.scss'

import crosshair_img from '../../../../assets/icons/crosshair.svg'
import arrow_img from '../../../../assets/icons/slider/arrow.png'

interface IMyWorksAddonInfo {
    currentWork: Work,
    nextWork: Work,
    goToNext: (next_id:string) => void
}

const MyWorksAddonInfo = ({currentWork, nextWork, goToNext  }:IMyWorksAddonInfo) => {

    const { man_id } = useParams()

    const Up = async () => {
        await GoUp()
    }

    return (
        <div className={'my-works_additional-info'}>
            <div className={'my-works_crosshair'}>
                <div className={'my-works_crosshair-wrapper'} onClick={Up}>
                    <Link to={`/team/${man_id}`}>
                        <img src={crosshair_img} alt={'img'}/>
                    </Link>
                </div>
            </div>
            <div className={'my-works_about-work'}>
                <div className={'my-works_about-work-title'}>
                    <h3>About Work</h3>
                </div>
                <div className={'my-works_about-work-text'}>
                    <p> { currentWork?.description  || "description" } </p>
                </div>
            </div>
            <div className={'my-works_next-work'}>
                <div className={'my-works_next-work-title'}>
                    <h3>Next Work</h3>
                </div>
                <div className={'my-works_next-work-button'} onClick={() => goToNext(nextWork?.id || '')}>
                    <div className={'my-works_arrow'}>
                        <img src={arrow_img} alt={'img'}/>
                    </div>
                    <div className={'my-works_next-img'}>
                        <img src={nextWork?.img || ''} alt={'img'}/>
                    </div>
                    <div className={'my-works__gray-overhead'}/>
                </div>
            </div>
            <div className={'my-works_software'}>
                <div className={'my-works_software-title'}>
                    <h3>Software Used</h3>
                </div>
                <div className={'my-works_soft'}>
                    {
                        currentWork?.software_used.map(soft => (
                            <div className={'my-works_soft-el'} key={soft.id}>
                                <img src={soft.imgSrc} alt={'img'}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyWorksAddonInfo;