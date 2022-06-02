import React from "react";
import { Link } from "react-router-dom";

import { IAboutButton } from "./AboutButton.interface";

import { GoUp } from "../../../../Utils/GoUp";

import aboutbutton from "./AboutButton.module.scss";

import arrow from "../../../../assets/icons/futuristic_arrow.png";

const AboutButton = ({ path, about }: IAboutButton) => {
  return (
    <button
      className={aboutbutton.container}
      data-testid={"about-button"}
      data-mouse-focus={true}
      onClick={GoUp}
    >
      <Link to={path.toString()} data-mouse-focus={true}>
        <div className={aboutbutton.text} data-mouse-focus={true}>
          <span data-mouse-focus={true}>О {about}</span>
        </div>
        <div className={aboutbutton.imgWrapper} data-mouse-focus={true}>
          <img
            src={arrow}
            alt={"img"}
            onDragStart={(e) => e.preventDefault()}
            data-mouse-focus={true}
          />
        </div>
      </Link>
    </button>
  );
};

export default AboutButton;
