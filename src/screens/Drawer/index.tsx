import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../HomeScreen";
import PreloadScreen from "../PreloadScreen";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Preload">
      <Drawer.Screen
        name="Preload"
        component={PreloadScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
