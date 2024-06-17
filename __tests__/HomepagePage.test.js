import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HomepagePage } from "../src/Pages";

test("Render homepage properly.", () => {
  const result = render(<HomepagePage />);
  const headingElement = result.container.querySelector("#intro-heading");
  expect(headingElement).toBeInTheDocument();
});
