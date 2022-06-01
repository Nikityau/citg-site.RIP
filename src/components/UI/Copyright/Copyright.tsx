import React from "react";

import Logo from "../Logo/Logo";

import { DeviceType } from "../Logo/Logo.inteface";

import copyright from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <div className={copyright.container}>
      <div className={copyright.logo}>
        <Logo link={"/home"} text={"CITG"} version={DeviceType.DESKTOP} />
      </div>
      <div className={copyright.copyrigthText}>
        <span data-mouse-focus={true}>&copy; СiTG 2022 / Все права защищены.</span>
      </div>
    </div>
  );
};

export default Copyright;
