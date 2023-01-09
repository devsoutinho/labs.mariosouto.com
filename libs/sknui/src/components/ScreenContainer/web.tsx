import { BoxPrimal } from "../primal/web";

interface ScreenContainer {
  children: React.ReactNode;
}
export function ScreenContainer({ children }: ScreenContainer) {
  return (
    <BoxPrimal styleSheet={{ flex: 1, flexDirection: "column" }}>
      {children}
    </BoxPrimal>
  );
}
