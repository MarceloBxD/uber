import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import api from "../../../services/api";
import { useNavigation } from "@react-navigation/native";

import * as C from "./style";

export default () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLocation(location.coords);
    })();
  }, []);

  return (
    <C.Container>
      <StatusBar style="light" backgroundColor="#000" />
      <C.Title>Uber</C.Title>
      <C.LogoutButton
        onPress={() => {
          api.logout();
          navigation.navigate("Login" as never);
        }}
      >
        <C.LogoutText>Logout</C.LogoutText>
      </C.LogoutButton>
    </C.Container>
  );
};
