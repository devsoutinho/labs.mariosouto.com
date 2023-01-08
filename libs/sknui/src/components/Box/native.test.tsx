import React from "react";
import { Box } from "./native";
import { customRender } from "@devsoutinho/common-test/testing-library/native";
import { Text } from "../Text/native";

const render = customRender();

describe("<Box />", () => {
  it("renders as expected", () => {
    const { toJSON } = render(
      <Box>
        <Text>Hello</Text>
      </Box>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
