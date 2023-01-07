import { render as rtlRender } from '@testing-library/react-native';
export * from '@testing-library/react-native';

interface DefaultWrapperProps {
  children: React.ReactNode;
}
function DefaultWrapper({ children }: DefaultWrapperProps) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui: any, options = {}) => {
    return rtlRender(ui, {
      wrapper: AllTheProviders as any,
      ...options,
    });
  }
}

export const render = () => console.error("Please create your own render method using customRender()");
