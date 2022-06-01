import React from "react";

//Components
import Advantages from "./Advantages/Advantages";
import RadialGradient from "../../../UI/Background/RadialGradient/RadialGradient";
import PhotoSlider from "./PhotoSlider/PhotoSlider";

//styles
import advantagesblock from "./AdvantagesBlock.module.scss";
import PageNumber from "../../../UI/PageNumber/PageNumber";

const AdvantagesBlock = () => {
  return (
    <div className={advantagesblock.container} id={"advantages"}>
      <RadialGradient />
      <div className={advantagesblock.innerContainer}>
        <div className={advantagesblock.page}>
          <PageNumber number={"01"} />
        </div>
        <div className={advantagesblock.advantages}>
          <Advantages />
        </div>
        <div className={advantagesblock.swiper}>
          <PhotoSlider />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;
