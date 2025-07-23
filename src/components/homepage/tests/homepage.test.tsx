import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Homepage } from "src/components/homepage";

const mockedStates = {
  programmingLanguages: true,
  hobbies: false,
};

test("Render homepage properly.", () => {
  const result = render(
    <Homepage handleOpen={jest.fn()} popupState={mockedStates} />
  );

  const headingElement = result.container.querySelector("#intro-heading");
  expect(headingElement).toMatchSnapshot();
});
