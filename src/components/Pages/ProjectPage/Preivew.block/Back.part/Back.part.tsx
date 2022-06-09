import React from 'react';

import './Back.part.scss'

import back_img from '../../../../../assets/images/syntetic-project-back.png'

const BackPart = () => {
    return (
        <div className={'back-part'}
        style={{ backgroundImage: `url(${back_img})` }}>
            <div className={'back-part__gradient-pink'}/>
            <div className={'back-part__blur'} />
        </div>
    );
};

export default BackPart;