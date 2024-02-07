import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

import Preload from "../screens/Preload";
import Login from "../screens/Login";
import DrawerStack from "../screens/Drawer";

export default () => {
  return (
    <MainStack.Navigator initialRouteName="Preload">
      <MainStack.Screen name="Preload" component={Preload} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={DrawerStack}
      />
    </MainStack.Navigator>
  );
};
