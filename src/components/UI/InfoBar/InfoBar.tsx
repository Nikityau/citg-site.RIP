import React from "react";

import infobar from "./InfoBar.module.scss";

import arrow_img from "../../../assets/icons/futuristic_arrow.svg";

const InfoBar = () => {
  return (
    <div className={infobar.container} data-testid={"info-bar"} data-mouse-focus={true}>
      <div className={infobar.upperInfo} data-mouse-focus={true}>
        <p data-mouse-focus={true}>
          Центр IT-Притяжения - это целая экосистема для реализации себя в сфере IT.{" "}
        </p>
      </div>
      <div data-mouse-focus={true} className={infobar.bottomInfo}>
        <p data-mouse-focus={true}>
          Это площадка, где школьники и студенты могут пройти весь путь становления “айтишника” от
          нуля до Pro.
        </p>
      </div>
      <div className={infobar.arrow}>
        <a href={"#advantages"}>
          <img src={arrow_img} alt={"img"} />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
