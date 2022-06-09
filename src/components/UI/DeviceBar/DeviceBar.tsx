import React from 'react';

import { Device } from '../../../SynteticData/Syntetic.data.type'

import './DeviceBar.scss'

const DeviceBar = ({logo, version, os}:Device) => {
    return (
        <div className={'device-bar'}>
            <div className={'device-bar_logo'}>
                <img src={logo} alt={'img'}/>
            </div>
            <div className={'device-bar_info'}>
                <p>{ os }</p>
                <p>{ version }</p>
            </div>
        </div>
    );
};

export default DeviceBar;