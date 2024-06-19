import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PostsPage } from "../src/Pages";

test("Render posts page properly.", () => {
  const result = render(<PostsPage />);
  const headingElement = result.container.querySelector("#post-wrapper");
  expect(headingElement).toBeInTheDocument();
});
