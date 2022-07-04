import React, {useContext} from 'react';

import purpleback from './PuprpleBackground.module.scss';

import noise from '../../../../assets/images/noise.png';
import {AppContext, Browser} from "../../../App/App";


function PurpleBackground() {

    const appContext = useContext(AppContext)

    return (
        <>
            <div className={purpleback.noise}>
                <img src={noise}/>
            </div>
            <div className={appContext.browser === Browser.SAFARI ? purpleback.blueGradient_Safari : purpleback.blueGradient_Default}/>
            <div className={appContext.browser === Browser.SAFARI ? purpleback.orangeGradient_Safari : purpleback.orangeGradient_Default}/>
        </>
    );
}

export default PurpleBackground;
