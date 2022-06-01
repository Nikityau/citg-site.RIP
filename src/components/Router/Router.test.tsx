import React, { Suspense } from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router-dom";

import Router from "./Router";
import RenderWithRouters from "../UtilsTest/RenderWithRouters";

describe("ROUTERS TEST", () => {
  test("home page", async () => {
    render(<RenderWithRouters component={null} path={"/home"} />);

    const home_page = await screen.findByTestId("home-page");
    expect(home_page).toBeInTheDocument();
  });
  test("projects page", async () => {
    render(<RenderWithRouters component={null} path={"/projects"} />);

    const projects_page = await screen.findByTestId("projects-page");
    expect(projects_page).toBeInTheDocument();
  });
  test("teams page", async () => {
    render(<RenderWithRouters component={null} path={"/teams"} />);

    const teams_page = await screen.findByTestId("teams-page");
    expect(teams_page).toBeInTheDocument();
  });
});
