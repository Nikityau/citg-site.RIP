import React  from "react";

import BurgerLink from "./Burger.link/Burger.link";

import burger from "./Burger.module.scss";

import noise from "../../../assets/images/noise.png";

const Burger = ({ isOpen, onClick }: { isOpen: boolean, onClick?: () => void }) => {
  return (
    <div className={burger.container} style={{ height: isOpen ? "100vh" : "0" }}>
      <div className={burger.noise} style={{ backgroundImage: `url(${noise})` }} />
      <div className={burger.linkContainer}>
        <BurgerLink path={"/home"} text={"Главная"} onClickCallback={onClick}/>
        <BurgerLink path={"/projects"} text={"Проекты"} onClickCallback={onClick}/>
        <BurgerLink path={"/team"} text={"Команда"} onClickCallback={onClick}/>
      </div>
    </div>
  );
};

export default Burger;
