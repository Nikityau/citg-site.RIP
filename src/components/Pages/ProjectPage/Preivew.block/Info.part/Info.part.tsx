import React from 'react';

import './Info.part.scss'

import img_prj_logo from '../../../../../assets/images/projects/project_synt_logo.png'

interface IInfoPart {
    logo: string,
    title: string,
    description: string
}

const InfoPart = () => {
    return (
        <div className={'info-part'}>
            <div className={'info-part_logo'}
                style={{ backgroundImage: `url(${ img_prj_logo })` }}
            >
            </div>
            <div className={'info-part_info'}>
                <div className={'info-part_info_title'}>
                    <h2>Cosmic Driver</h2>
                </div>
                <div className={'info-part_info_description'}>
                    <p>Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!</p>
                    <p>Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.</p>
                    <p className={'info-part__blue-text'}>см.системные требования</p>
                </div>
                <div className={'info-part_info_button'}>
                    <button>
                        <a href="#projects-container">
                          show more
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPart;