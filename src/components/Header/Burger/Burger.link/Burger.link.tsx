import React from "react";
import { Link, useLocation } from "react-router-dom";

import { GoUp } from "../../../../Utils/GoUp";

import burgerLink from "./Burger.link.module.scss";

const BurgerLink = ({ path, text }: { path: string; text: string }) => {
  const location = useLocation();

  return (
    <div
      onClick={GoUp}
      className={burgerLink.container}
      style={{ background: location.pathname.includes(path) ? "rgba(0, 0, 0, 0.37)" : "" }}
    >
      <Link to={path}>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default BurgerLink;
