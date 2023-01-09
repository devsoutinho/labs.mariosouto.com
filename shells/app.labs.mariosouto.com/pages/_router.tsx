import { Provider } from "@devsoutinho/sknui/native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./RootStack/_route";
export default function Router() {
  return (
    <Provider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
