import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./RootStack/_route";
export default function Router() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
