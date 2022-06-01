import React, { useEffect } from "react";

import BurgerLink from "./Burger.link/Burger.link";

import burger from "./Burger.module.scss";

import noise from "../../../assets/images/noise.png";

const Burger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={burger.container} style={{ height: isOpen ? "100vh" : "0" }}>
      <div className={burger.noise} style={{ backgroundImage: `url(${noise})` }} />
      <div className={burger.linkContainer}>
        <BurgerLink path={"/home"} text={"Главная"} />
        <BurgerLink path={"/projects"} text={"Проекты"} />
        <BurgerLink path={"/team"} text={"Команда"} />
      </div>
    </div>
  );
};

export default Burger;
