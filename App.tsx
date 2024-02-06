import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from "./src/screens/Drawer";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#000" />

      <DrawerStack />
    </NavigationContainer>
  );
}
