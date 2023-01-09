/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import renderer from "react-test-renderer";
import { customRender } from "@devsoutinho/common-test/testing-library/native";

import { Box } from "./native";
import { Text } from "../Text/native";

// BASE
describe("<Box />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <Box>
          <Text>Hi</Text>
        </Box>
      )
      .toJSON();
    const children = (tree as any)?.children;
    expect(children?.length).toBe(1);
  });
});

const render = customRender();

describe("<HomeScreen /> 2", () => {
  it("renders as expected", () => {
    const { toJSON } = render(
      <Box>
        <Text>Hi</Text>
      </Box>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
