import React from 'react';

import DeviceBar from "../../../../UI/DeviceBar/DeviceBar";

import './SupportedDevices.part.scss'

import android_img from '../../../../../assets/icons/devices/android.svg'
import apple_img from '../../../../../assets/icons/devices/apple.svg'

const SupportedDevicesPart = () => {
    return (
        <div className={'supported-devices'}>
            <div className={'supported-devices_logo'}>
                <h5>Supported Devices:</h5>
            </div>
            <div className={'supported-devices_devices'}>
                <DeviceBar logo={android_img} os={'android'} version={'5.0+'}/>
                <DeviceBar logo={apple_img} os={'ios'} version={'13+'}/>
            </div>
        </div>
    );
};

export default SupportedDevicesPart;