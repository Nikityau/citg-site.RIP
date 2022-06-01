import React from 'react';

import Logo from '../Logo/Logo';

import { DeviceType } from '../Logo/Logo.inteface';

import copyright from './Copyright.module.scss';

function Copyright() {
  return (
    <div className={copyright.container}>
      <div className={copyright.logo}>
        <Logo link="/home" text="CITG" version={DeviceType.DESKTOP} />
      </div>
      <div className={copyright.copyrigthText}>
        <span data-mouse-focus>&copy; СiTG 2022 / Все права защищены.</span>
      </div>
    </div>
  );
}

export default Copyright;
