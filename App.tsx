import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from "./src/screens/Drawer";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./contexts/AuthContext";
import MainStack from "./src/stacks/MainStack";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#000" />
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
