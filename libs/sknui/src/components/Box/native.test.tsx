/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import renderer from "react-test-renderer";

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
