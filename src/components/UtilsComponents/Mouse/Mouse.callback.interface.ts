import { IMouse } from "./Mouse.interface";
import { ReactElement } from "react";

export interface IMouseCallback {
  childrenCallback: ({ x, y }: IMouse) => ReactElement;
  devMode: boolean;
}
