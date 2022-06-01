import React from "react";

import { ISkillCard } from "./SkillCard.interface";

import skillcard from "./SkillCard.module.scss";

const SkillCard = ({ number, title, subtitle }: ISkillCard) => {
  return (
    <div className={skillcard.container}>
      <div className={skillcard.number}>
        <h4 data-mouse-focus={true}>{number}</h4>
      </div>
      <div className={skillcard.title}>
        <h4 data-mouse-focus={true}>{title}</h4>
      </div>
      <div className={skillcard.subtitle}>
        <h5 data-mouse-focus={true}> {subtitle} </h5>
      </div>
    </div>
  );
};

export default SkillCard;
