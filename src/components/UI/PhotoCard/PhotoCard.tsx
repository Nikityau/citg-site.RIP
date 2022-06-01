import React from "react";

import { IPhotoCard } from "./PhotoCard.interface";

//images
import plug from "../../../assets/images/plug.png";

//style
import photocard from "./PhotoCard.module.scss";

const PhotoCard = ({ imgSrc = plug, title = "test" }: IPhotoCard) => {
  return (
    <div className={photocard.container}>
      <div className={photocard.innerContainer}>
        <div className={photocard.img}>
          <div style={{ backgroundImage: `url(${imgSrc})` }} data-mouse-focus={true} />
        </div>
        <div className={photocard.title}>
          <h3 data-mouse-focus={true}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
