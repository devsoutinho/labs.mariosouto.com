import React from "react";
import { LoginScreen } from "./LoginScreen";
import { customRender } from "@devsoutinho/common-test/testing-library/web";
import { Provider } from "@devsoutinho/sknui/web";

const render = customRender((props) => <Provider {...props} />);

describe("<HomeScreen />", () => {
  it("renders as expected", () => {
    const { container } = render(<LoginScreen />);

    expect(container).toMatchSnapshot();
  });
});
