import { Text } from "../Text/native";
import { Touchable } from "./native";

export const Component = Touchable;

export const controls = {
  props: {
    ...Component.defaultProps,
    children: <Text>Olá pessoas</Text>,
    styleSheet: {
      padding: 10,
    },
    disabled: false,
  },
};
