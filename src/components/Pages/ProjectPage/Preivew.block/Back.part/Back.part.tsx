import React, {useContext} from 'react';

import './Back.part.scss'

import back_img from '../../../../../assets/images/syntetic-project-back.png'

import {AppContext, Browser} from "../../../../App/App";

const BackPart = () => {
    const appContext = useContext(AppContext)
    return (
        <div className={'back-part'}
        style={{ backgroundImage: `url(${back_img})` }}>
            <div className={
                appContext.browser !== Browser.SAFARI
                    ? 'back-part__gradient-pink_Safari'
                    : 'back-part__gradient-pink_Default'
            }/>
            <div className={'back-part__blur'} />
        </div>
    );
};

export default BackPart;