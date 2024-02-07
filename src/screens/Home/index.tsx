import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import * as C from "./style";

import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

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
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        camera={{
          center: {
            latitude: latitude || -23.5505,
            longitude: longitude || -46.6333,
          },
          pitch: 0,
          heading: 0,
          altitude: 0,
          zoom: 16,
        }}
        provider={PROVIDER_GOOGLE}
      />
    </C.Container>
  );
};
