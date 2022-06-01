import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";

import Router from "../Router/Router";

import { IRenderWithRouters } from "./RenderWithRouters.interface";

export default ({ component, path }: IRenderWithRouters): ReactElement => {
  return (
    <MemoryRouter initialEntries={[path.toString()]}>
      <Router />
      {component}
    </MemoryRouter>
  );
};
