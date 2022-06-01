import React, { useEffect, useState } from "react";

import { CustomMouseController } from "./CustomMouse.controller";

import { IMouse } from "../../UtilsComponents/Mouse/Mouse.interface";

import customouse from "./CustomMouse.module.scss";

const CustomMouse = (coords: IMouse) => {
  const [customMouse_Controller, setCustomMouse_Controller] =
    useState<CustomMouseController | null>(null);

  useEffect(() => {
    const mouse = document.getElementById("custom-mouse");
    const mouse_point = document.getElementById("custom-mouse-additional-point");

    if (!mouse || !mouse_point) return;

    setCustomMouse_Controller(new CustomMouseController(mouse, mouse_point));

    return () => {
      setCustomMouse_Controller(null);
    };
  }, []);

  useEffect(() => {
    if (!customMouse_Controller) return;

    customMouse_Controller.onChangeCoords(coords);
  }, [coords]);

  return (
    <>
      <div id={"custom-mouse"} className={customouse.mouse} />
      <div id={"custom-mouse-additional-point"} className={customouse.additionalPoint} />
    </>
  );
};

export default CustomMouse;
