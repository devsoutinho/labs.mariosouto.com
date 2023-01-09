/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import renderer from "react-test-renderer";
import { render as rtlRender } from "@testing-library/react-native";

import { HomeScreen } from "./HomeScreen";

const mock = {} as any;

// BASE
describe("<HomeScreen />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<HomeScreen navigation={mock} route={mock} key="" />)
      .toJSON();
    const children = (tree as any).children;
    expect(children.length).toBe(2);
  });
});

// ==============================
// RNTL
// ==============================
interface DefaultWrapperProps {
  children: React.ReactNode;
}
function DefaultWrapper({ children }: DefaultWrapperProps) {
  return children;
}
const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui: any, options = {}) => {
    return rtlRender(ui, {
      wrapper: AllTheProviders as any,
      ...options,
    });
  };
};

const render = customRender();

describe("<HomeScreen /> 2", () => {
  it("renders as expected", () => {
    const { toJSON } = render(
      <HomeScreen navigation={mock} route={mock} key="" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
