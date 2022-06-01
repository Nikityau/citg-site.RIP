import React, {
  EventHandler,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { MouseBaseController } from "./Mouse.base.controller";

import { IMouse } from "./Mouse.interface";
import { IMouseCallback } from "./Mouse.callback.interface";

const Mouse = ({ childrenCallback, devMode }: IMouseCallback) => {
  const [mouseState, setMouseState] = useState<IMouse>({ x: 0, y: 0 });
  const [mouseBase, setMoueBase] = useState<MouseBaseController | null>();

  useEffect(() => {
    setMoueBase(new MouseBaseController(setMouseState));
    return () => {
      if (mouseBase) mouseBase.Unsubscribe();
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: devMode ? "block" : "none",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 99,
          color: "#fff",
          fontSize: "30px",
          width: "200px",
        }}
      >
        <div>x: {mouseBase?.X || 0}</div>
        <div>y: {mouseBase?.Y || 0}</div>
      </div>
      {childrenCallback({ x: mouseState.x, y: mouseState.y })}
    </div>
  );
};

export default Mouse;
