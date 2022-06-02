import React  from "react";

import { ISkillSection } from "./ElementSection.interface";

import elementssection from "./ElementsSection.module.scss";

const ElementsSection = ({ block_1, block_2, block_3 }: ISkillSection) => {
  return (
    <div className={elementssection.container}>
      {block_1}
      {block_2}
      {block_3}
    </div>
  );
};

export default ElementsSection;
