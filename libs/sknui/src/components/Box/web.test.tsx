import React from "react";
import { Box } from "./web";
import { customRender } from "../../../commons/testing-library/web";
import { Text } from "../Text/web";

const render = customRender();

describe("<Box />", () => {
  it("renders as expected", () => {
    const { container } = render(
      <Box>
        <Text>Hello</Text>
      </Box>
    );

    expect(container).toMatchSnapshot();
  });
});
