/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import renderer from "react-test-renderer";
import { HomeScreen } from "./HomeScreen";
import { customRender } from "@devsoutinho/common-test/testing-library/native";

const mock = {} as any;

describe("<HomeScreen />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<HomeScreen navigation={mock} route={mock} key="" />)
      .toJSON();
    const children = (tree as any).children;
    expect(children.length).toBe(2);
  });
});

const render = customRender();

describe("<HomeScreen /> 2", () => {
  it("renders as expected", () => {
    const { toJSON } = render(
      <HomeScreen navigation={mock} route={mock} key="" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
