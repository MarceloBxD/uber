import { createDrawerNavigator } from "@react-navigation/drawer";

import Preload from "../Preload";
import Home from "../Home";
import Login from "../Login";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Preload">
      <Drawer.Screen
        name="Preload"
        component={Preload}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
