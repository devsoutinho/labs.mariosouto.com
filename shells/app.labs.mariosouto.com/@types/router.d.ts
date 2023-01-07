import { NativeStackScreenProps } from "@react-navigation/native-stack";


declare global {
  type RootStackNavigatorParamList = {
    "home": undefined;
    "storybook": undefined;
    "storybook/[componentName]": {
      componentName: string;
    };
  }
  type RootStackHomeScreenProps = NativeStackScreenProps<RootStackNavigatorParamList, "home">;
  type RootStackStorybookScreenProps = NativeStackScreenProps<RootStackNavigatorParamList, "storybook">;
  type RootStackStorybookComponentScreenProps = NativeStackScreenProps<RootStackNavigatorParamList, "storybook/[componentName]">;

  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorParamList {}
  }
}
