import React from "react";

import { IMiniGameCard } from "./MiniGameCard.interface";

import minigamecard from "./MiniGameCard.module.scss";

const MiniGameCard = ({ img, title }: IMiniGameCard) => {
  return (
    <div className={minigamecard.container}>
      <div className={minigamecard.img}>
        <div style={{ backgroundImage: `url(${img})` }} />
      </div>
      <div className={minigamecard.title}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default MiniGameCard;
