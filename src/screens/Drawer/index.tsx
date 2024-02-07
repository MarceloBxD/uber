import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Home";
import CustomDrawer from "./CustomDrawer";
import Profile from "./Profile";
import Settings from "./Settings";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
