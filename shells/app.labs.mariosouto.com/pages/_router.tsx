import HomeScreen from "./index";
import { StorybookScreen } from "./storybook";
import { StorybookComponentScreen } from "./storybook/[componentName]";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator<RootStackNavigatorParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="home">
        <HomeStack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Route Bar Title' }}
        />
        <HomeStack.Screen
          name="storybook"
          component={StorybookScreen}
          options={{ title: 'Storybook' }}
        />
        <HomeStack.Screen
          name="storybook/[componentName]"
          component={StorybookComponentScreen}
          options={{ title: 'Storybook' }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
