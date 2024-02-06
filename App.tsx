import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from "./src/screens/Drawer";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#000" />
        <DrawerStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
