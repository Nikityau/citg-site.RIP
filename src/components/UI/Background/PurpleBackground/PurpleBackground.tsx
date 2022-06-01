import React from "react";

import purpleback from "./PuprpleBackground.module.scss";

import noise from "../../../../assets/images/noise.png";

const PurpleBackground = () => {
  return (
    <>
      <div className={purpleback.noise}>
        <img src={noise} />
      </div>
      <div className={purpleback.blueGradient} />
      <div className={purpleback.orangeGradient} />
    </>
  );
};

export default PurpleBackground;
