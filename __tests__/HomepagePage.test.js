import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Homepage from "../src/common/Homepage";

test("Render homepage properly.", () => {
  const result = render(<Homepage />);
  const headingElement = result.container.querySelector("#intro-heading");
  expect(headingElement).toBeInTheDocument();
});
