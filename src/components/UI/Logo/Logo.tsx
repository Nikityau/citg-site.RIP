import React from "react";
import { Link } from "react-router-dom";

import { ILogo, DeviceType } from "./Logo.inteface";

import { GoUp } from "../../../Utils/GoUp";

import logo_img from "../../../assets/icons/logo.png";
import logo_mob from "../../../assets/icons/logo.png";

import logo from "./Logo.module.scss";

const Logo = ({ link, text, version }: ILogo) => {
  const getLogoByVersion = () => {
    console.log(logo_img)
    switch (version) {
      case DeviceType.DESKTOP:
        return logo_img;
      case DeviceType.MOBILE:
        return logo_mob;
      default:
        return logo_img;
    }
  };

  return (
    <div className={logo.container} onClick={GoUp}>
      <Link to={link.toString()} data-mouse-focus={true}>
        <img
          src={getLogoByVersion()}
          alt={"img"}
          data-mouse-focus={true}
          onDragStart={(e) => e.preventDefault()}
        />
        <h1 data-mouse-focus={true}>{text}</h1>
      </Link>
    </div>
  );
};

export default Logo;
