import React from "react";
import { HomeScreen } from "./HomeScreen";
import { customRender } from "@devsoutinho/common-test/testing-library/web";
const render = customRender();
describe("<HomeScreen />", () => {
  it("renders as expected", () => {
    const { container } = render(React.createElement(HomeScreen, null));
    expect(container).toMatchSnapshot();
  });
});
