import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Posts from "../src/components/posts/Posts";

test("Render posts page properly.", () => {
  const result = render(<Posts />);
  const headingElement = result.container.querySelector("#post-wrapper");
  expect(headingElement).toBeInTheDocument();
});
