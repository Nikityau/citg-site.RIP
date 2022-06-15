import React from 'react';
import {Link} from "react-router-dom";

import './Error.404.scss'

import back_img from '../../../assets/images/404/back.png'
import error_left_top from '../../../assets/images/404/error-left-top.png'
import error_right_bottom from '../../../assets/images/404/error-right-bottom.png'

const Error404 = () => {
    return (
        <div className={'error-404'}>
            <div className={'error-404__background'}>
                <img src={back_img} alt={'img'}/>
            </div>
            <div className={'error-404_container'}>
                <div className={'error-404_404'}>
                    <h3>404</h3>
                </div>
                <div className={'error-404_step-back'}>
                    <p>uh-oh...</p>
                    <p>we lost you on the way...</p>
                    <p>Do not worry we will reel you back in</p>
                    <div className={'error-404_step-back-button'}>
                        <Link to={'/home'}>
                            <span>Take me back</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'error-404__error-left-top'}>
                <img src={error_left_top} alt={'img'}/>
            </div>
            <div className={'error-404__error-right-bottom'}>
                <img src={error_right_bottom} alt={'img'}/>
            </div>
        </div>
    );
};

export default Error404;