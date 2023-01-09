import { render as rtlRender } from "@testing-library/react-native";
export * from "@testing-library/react-native";

interface DefaultWrapperProps {
  children: React.ReactNode;
}
function DefaultWrapper({ children }: DefaultWrapperProps) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (ui: any, options = {}) => {
    return rtlRender(ui, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      wrapper: AllTheProviders as any,
      ...options,
    });
  };
};

export const render = () =>
  console.error("Please create your own render method using customRender()");
