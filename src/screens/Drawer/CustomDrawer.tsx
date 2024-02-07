import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import api from "../../../services/api";
import Home from "../Home";
import Profile from "./Profile";
import Settings from "./Settings";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialIcons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width * 0.75;

  const drawerData = [
    {
      icon: <MaterialIcons name="home" size={24} color="#000" />,
      label: "Home",
      component: Home,
    },
    {
      icon: <FontAwesome name="user" size={24} color="#000" />,
      label: "Profile",
      component: Profile,
    },
    {
      icon: <Entypo name="cog" size={24} color="#000" />,
      label: "Settings",
      component: Settings,
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.drawerContainer, { width }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.drawerTitle}>Uber</Text>
        </View>
        {drawerData.map((item, index) => (
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate(item.label)}
            key={index}
          >
            <View style={styles.iconArea}>{item.icon}</View>
            <Text style={styles.drawerItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={async () => {
          await api.logout();
          navigation.navigate("Login" as never);
        }}
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
        <AntDesign name="logout" size={24} color="black" />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  drawerTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  drawerItemText: {
    color: "#000",
    fontSize: 16,
  },
  logoutText: {
    color: "#000",
    fontSize: 16,
  },
  iconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomDrawer;
