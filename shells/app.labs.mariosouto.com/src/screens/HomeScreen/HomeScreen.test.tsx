import React from "react";
import { HomeScreen } from "./HomeScreen";
import { customRender } from "@devsoutinho/common-test/testing-library/native";

const render = customRender();

describe("<HomeScreen />", () => {
  it("renders as expected", () => {
    const { toJSON } = render(<HomeScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
