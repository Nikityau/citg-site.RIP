import React from "react";

import { IMiniGameImage } from "./MiniGameImage.interface";

import minigameimage from "./MiniGameImage.module.scss";

const MiniGameImage = ({ imgSrc }: IMiniGameImage) => {
  return (
    <div className={minigameimage.container}>
      <div style={{ backgroundImage: `url(${imgSrc})` }} data-mouse-focus={true} />
    </div>
  );
};

export default MiniGameImage;
