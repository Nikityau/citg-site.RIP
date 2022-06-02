import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Circle from "./Circle/Circle";

import { NavigationClass } from "./Navigation.class";

import { INavInterface } from "./Navigation.interface";

import { GoUp } from "../../../Utils/GoUp";

import navigation from "./Navigation.module.scss";

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

    if(isPopUpOpen) {}

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
          data-mouse-focus={true}>
            <h4 data-mouse-focus={true}>Главная</h4>
        </Link>
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
          data-mouse-focus={true}>
            <h4 data-mouse-focus={true}>Проекты</h4>
        </Link>
        {isPopUp && (
          <div className={navigation.arrow} data-mouse-focus={true}>
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
          data-mouse-focus={true}>
            <h4 data-mouse-focus={true}>Команда</h4>
        </Link>
      </div>
      <Circle />
    </nav>
  );
};

export default Navigation;
