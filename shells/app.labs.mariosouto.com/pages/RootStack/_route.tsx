import Constants from 'expo-constants';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@src/screens/HomeScreen/HomeScreen";
import { StorybookScreen } from "./storybook";
import { StorybookComponentScreen } from "./storybook/[componentName]";

const RootStack = createNativeStackNavigator<RootStackNavigatorParamList>();

export function RootStackNavigator() {
  const isPlayground = Boolean(Constants?.expoConfig?.extra?.playground);
  const initialRouteName = isPlayground ? "storybook" : "home";

  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Route Bar Title' }}
      />
      <RootStack.Screen
        name="storybook"
        component={StorybookScreen}
        options={{ title: 'Storybook' }}
      />
      <RootStack.Screen
        name="storybook/[componentName]"
        component={StorybookComponentScreen}
        options={({ route }) => ({ title: `Storybook Component - ${route.params.componentName}` })}
      />
    </RootStack.Navigator>
  )
}
