import React, { useCallback, useRef, useState } from "react";

import Logo from "../UI/Logo/Logo";
import PopUp from "./PopUp/PopUp";
import Mail from "../UI/Mail/Mail";

const Navigation = React.lazy(() => import('./Navigation/Navigation'))
const Burger = React.lazy(() => import('./Burger/Burger'))

import { DeviceType } from "../UI/Logo/Logo.inteface";

import header from "./Header.module.scss";

import {useToggler} from "../customHooks/useToggler";

const Header = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useToggler(false);

  const headerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const popUpRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const preventScroll = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    return;
  };

  const preventCallback = useCallback(preventScroll, []);

  const openPopUp = () => {
    if (popUpRef.current == null || headerRef.current == null) return;

    if (!headerRef.current?.clientHeight) return;

    const offsetTop = headerRef.current.clientHeight;

    popUpRef.current.style.top = offsetTop + "px";
    setIsPopUpOpen.On();
  };
  const popUpMouseEnter = () => {
    openPopUp();
  };

  const popUpMouseLeave = () => {
    if (popUpRef.current == null) return;

    popUpRef.current.style.top = "-600px";
    setIsPopUpOpen.Off();
  };

  const onBurgerClick = () => {
    if (isPopUpOpen) {
      window.removeEventListener("touchmove", preventCallback, false);
      setIsPopUpOpen.Off()
      return;
    }

    setIsPopUpOpen.On()
    window.addEventListener("touchmove", preventCallback, { passive: false });
  };

  return (
    <header id={'header'} className={header.header} ref={headerRef}>
      <div className={header.innerWrapper}>
        <div className={header.container}>
          <Logo link={"/home"} text={"CITG"} version={DeviceType.DESKTOP} />
          <Navigation
            home={"/home"}
            middle={"/projects"}
            end={"/team"}
            isPopUp={true}
            closePopUp={popUpMouseLeave}
            isPopUpOpen={isPopUpOpen}
            openPopUp={openPopUp}
          />
          <div className={header.contactUs}>
            <Mail mail={"proverka@mail.ru"} />
          </div>
        </div>
        <div className={header.mobVersion}>
          <div className={header.logoContainer}>
            <Logo link={"/home"} text={"CITG"} version={DeviceType.MOBILE} />
          </div>
          <div
            className={[header.burger, isPopUpOpen ? header.burgerOpen : ""].join(" ")}
            onClick={onBurgerClick}
          >
            <div className={header.burgerWrapper}>
              <div className={header.burgerTopLine} />
              <div className={header.burgerMiddleLine} />
              <div className={header.burgerBottomLine} />
            </div>
          </div>
        </div>
      </div>
      <Burger isOpen={isPopUpOpen} onClick={onBurgerClick}/>
      <PopUp popUpMouseLeave={popUpMouseLeave} popUpMouseEnter={popUpMouseEnter} ref={popUpRef} />
    </header>
  );
};

export default Header;
