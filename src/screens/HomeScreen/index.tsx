import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";

import * as C from "./style";

export default () => {
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
    </C.Container>
  );
};
