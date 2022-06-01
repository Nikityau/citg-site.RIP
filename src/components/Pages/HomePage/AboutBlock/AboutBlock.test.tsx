import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AboutBlock from "./AboutBlock";
import RenderWithRouters from "../../../UtilsTest/RenderWithRouters";

describe("ABOUT BLOCK TEST", () => {
  test("Page Number Loaded", () => {
    render(<RenderWithRouters path={"/test"} component={<AboutBlock />} />);

    expect(screen.getByTestId("page-number")).toBeInTheDocument();
  });
  test("Page Number 03", () => {
    render(<RenderWithRouters path={"/test"} component={<AboutBlock />} />);

    expect(screen.getByTestId("page-number")).toContainHTML("03");
  });
  test("About Button Loaded", () => {
    render(<RenderWithRouters path={"/test"} component={<AboutBlock />} />);

    expect(screen.getByTestId("about-button")).toBeInTheDocument();
  });
});
