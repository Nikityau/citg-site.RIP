import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Circle from "./Circle/Circle";

import { NavigationClass } from "./Navigation.class";

import { INavInterface } from "./Navigation.interface";

import { GoUp } from "../../../Utils/GoUp";

import navigation from "./Navigation.module.scss";

import arrow from "../../../assets/icons/arrow.svg";

const nav = new NavigationClass(null, null, null, null, "/");

const Navigation = ({
  home,
  middle,
  end,
  isPopUp,
  closePopUp,
  isPopUpOpen,
  openPopUp,
}: INavInterface) => {
  const location = useLocation();

  useEffect(() => {
    const circle = document.getElementById("navigation-circle");

    const home = document.getElementById("navigation-home");
    const middle = document.getElementById("navigation-projects");
    const end = document.getElementById("navigation-teams");

    if (!circle || !home || !middle || !end) return;

    nav.AddLinks(circle, home, middle, end);
  }, []);

  useEffect(() => {
    ChangeLocation();
  }, [location]);

  const ChangeLocation = () => {
    nav.Change(location.pathname);
  };

  const middleHover = () => {
    openPopUp();
  };

  return (
    <nav className={navigation.container}>
      <div
        className={navigation.element}
        id={"navigation-home"}
        onClick={GoUp}
        data-mouse-focus={true}
      >
        <Link
          to={home}
          data-mouse-focus={true}
          children={<h4 data-mouse-focus={true}>Главная</h4>}
        />
      </div>
      <div
        onClick={GoUp}
        className={navigation.element}
        data-mouse-focus={true}
        onMouseEnter={middleHover}
        onMouseLeave={closePopUp}
        id={"navigation-projects"}
      >
        <Link
          to={middle}
          children={<h4 data-mouse-focus={true}>Проекты</h4>}
          data-mouse-focus={true}
        />
        {isPopUp && (
          <div className={navigation.arrow} data-mouse-focus={true}>
            <img
              src={arrow}
              alt={"img"}
              className={isPopUpOpen ? navigation.popUpOpen : ""}
              data-mouse-focus={true}
            />
          </div>
        )}
      </div>
      <div
        className={navigation.element}
        id={"navigation-teams"}
        onClick={GoUp}
        data-mouse-focus={true}
      >
        <Link
          to={end}
          children={<h4 data-mouse-focus={true}>Команда</h4>}
          data-mouse-focus={true}
        />
      </div>
      <Circle />
    </nav>
  );
};

export default Navigation;
