import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AdvantagesBlock from "./AdvantagesBlock";

describe("ADVANTAGES BLOCK TEST", () => {
  describe("LEFT SIDE TEST", () => {
    test("Advantages Text is Loaded", () => {
      render(<AdvantagesBlock />);

      expect(screen.getByTestId("advantages-block-advantages")).toBeInTheDocument();
    });
  });

  describe("RIGHT SIDE TEST", () => {
    test("Carousel is Loaded", () => {
      render(<AdvantagesBlock />);

      expect(screen.getByTestId("advantages-block-carousel")).toBeInTheDocument();
    });
  });
});
