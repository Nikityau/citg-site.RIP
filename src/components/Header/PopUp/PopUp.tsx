import React from "react";

import MiniGameCard from "../../UI/MiniGameCard/MiniGameCard";

import { IPopUp } from "./PopUp.interface";

import popup from "./PopUp.module.scss";

import img from "../../../assets/images/plug.png";

const PopUp = React.forwardRef(
  ({ popUpMouseLeave, popUpMouseEnter }: IPopUp, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={popup.container}
        ref={ref}
        onMouseLeave={popUpMouseLeave}
        onMouseEnter={popUpMouseEnter}
      >
        <div className={popup.innerContainer}>
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
          <MiniGameCard img={img} title={"title"} />
        </div>
      </div>
    );
  }
);

export default PopUp;
