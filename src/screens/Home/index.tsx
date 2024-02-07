import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import * as C from "./style";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "../../config";
import Geocoder from "react-native-geocoding";
import { View } from "react-native";
import RequestModal from "../../components/RequestModal";

export default () => {
  const navigation = useNavigation();
  const mapRef = useRef<MapView>(null);

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fromLocationName, setFromLocationName] = useState<string>("");
  const [toLocationName, setToLocationName] = useState<string>("");
  const [type, setType] = useState<"origin" | "destination" | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [fromLocation, setFromLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: -22.5303564,
    longitude: -41.932257,
  });
  const [toLocation, setToLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | undefined
  >(undefined);

  const getMyCurrentPosition = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setFromLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const geo = await Geocoder.from(latitude, longitude);
      if (geo.results.length > 0) {
        const address = geo.results[0].formatted_address;
        console.log("endereço", address);
        setFromLocationName(address);
      }
    } catch (error) {
      console.log("getMyCurrentPosition -> error", error);
      setErrorMsg("Não foi possível obter sua localização");
      alert("Não foi possível obter sua localização");
    }
  };

  useEffect(() => {
    Geocoder.init(GOOGLE_MAPS_APIKEY, { language: "pt-br" });
    getMyCurrentPosition();
  }, []);

  // const fillAddress = async () => {
  //   if (fromLocation.latitude !== 0) {
  //     const geo = await Geocoder.from(latitude, longitude);
  //     console.log("geo", geo);

  //     if (geo.results.length > 0) {
  //       const address = geo.results[0].formatted_address;
  //       console.log("endereço", address);
  //       setFromLocationName(address);
  //     }
  //   }
  // };

  // fillAddress();

  return (
    <C.Container>
      <StatusBar style="light" backgroundColor="#000" />
      <MapView
        initialCamera={{
          center: {
            latitude: 0,
            longitude: 0,
          },
          pitch: 0,
          heading: 0,
          altitude: 0,
          zoom: 16,
        }}
        ref={mapRef}
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
      >
        <Marker
          coordinate={fromLocation}
          title="Você está aqui"
          pinColor="#000"
          description="Sua localização atual"
        />
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>

      <C.ItineraryArea>
        <C.ItineraryItem
          onPress={() => {
            setShowModal(true);
            setType("origin");
          }}
        >
          <>
            <C.ItineraryLabel>
              <C.ItineraryPoint color="#000" />
              <C.ItineraryTitle>Origem</C.ItineraryTitle>
            </C.ItineraryLabel>
            <C.ItineraryValue>
              {fromLocationName || "Carregando..."}
            </C.ItineraryValue>
          </>
        </C.ItineraryItem>
        <C.ItineraryItem
          onPress={() => {
            setShowModal(true);
            setType("destination");
          }}
        >
          <>
            <C.ItineraryLabel>
              <C.ItineraryPoint color="#000" />
              <C.ItineraryTitle>Destino</C.ItineraryTitle>
            </C.ItineraryLabel>
            <C.ItineraryValue>
              {toLocationName || "Carregando..."}
            </C.ItineraryValue>
          </>
        </C.ItineraryItem>
      </C.ItineraryArea>
      {showModal && (
        <RequestModal
          setShowModal={setShowModal}
          type={type}
          visible={showModal}
        />
      )}
    </C.Container>
  );
};
