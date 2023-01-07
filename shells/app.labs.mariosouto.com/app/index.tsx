import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from "@src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}