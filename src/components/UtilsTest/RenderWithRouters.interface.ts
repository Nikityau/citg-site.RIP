import { ReactElement } from "react";

export interface IRenderWithRouters {
  component: ReactElement | null;
  path: string;
}
