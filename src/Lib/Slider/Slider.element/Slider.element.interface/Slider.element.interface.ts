import React, {MouseEventHandler} from "react";

export interface ISliderElement {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode;
}
