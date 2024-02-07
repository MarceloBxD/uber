import { AntDesign } from "@expo/vector-icons";
import * as C from "./style";
import { useEffect, useState } from "react";
import Geocoder from "react-native-geocoding";

type RequestModalProps = {
  type: string;
  visible: boolean;
  setShowModal: (visible: boolean) => void;
};

export default function RequestModal({
  type,
  visible,
  setShowModal,
}: RequestModalProps) {
  const [searchText, setSearchText] = useState<string>("");
  const [originalLocations] = useState<string[]>([
    "Rio de Janeiro, RJ",
    "Rio das Ostras, RO",
    "Taboão da Sé",
    "Varginha, MG",
    "Avenida Paulista 100",
    "Rua Aldrin, 95",
    "Rua Jornalista Henrique Cordeiro, 270",
    "Rua João de Barro, 100",
    "Rua do Bosque, 100",
    "Rua das Flores, 100",
    "Rua das Oliveiras, 100",
    "Rua das Margaridas, 100",
    "Rua das Violetas, 100",
    "Rua das Orquídeas, 100",
    "Rua das Tulipas, 100",
    "Rua das Rosas, 100",
    "Rua das Begônias, 100",
  ]);
  const [locations, setLocations] = useState<string[]>(originalLocations);

  useEffect(() => {
    let timer;

    if (searchText) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        // const geo = await Geocoder.from(searchText);
        // if (geo.results.length > 0) {
        //   console.log("resultados", geo.results[0].geometry.location);
        // }
        setLocations(
          [...originalLocations].filter((item) => item.includes(searchText))
        );
      }, 1000);
    } else {
      setLocations(originalLocations);
    }
  }, [searchText, originalLocations]);

  if (visible) {
    return (
      <C.Container animationType="slide">
        <C.Header>
          <C.Title>{type === "origin" ? "Origem" : "Destino"}</C.Title>
          <AntDesign
            onPress={() => setShowModal(false)}
            name="close"
            size={24}
            color="#000"
          />
        </C.Header>
        <C.MainContent>
          <C.InputArea>
            {type === "origin" && (
              <C.Input
                selectionColor="#000"
                value={searchText}
                onChangeText={(t: string) => setSearchText(t)}
                placeholder="De onde você vai partir?"
              />
            )}
            {type === "destination" && (
              <C.Input
                selectionColor="#000"
                value={searchText}
                onChangeText={(t: string) => setSearchText(t)}
                placeholder="Para onde você vai?"
              />
            )}
          </C.InputArea>
          <C.LocationList>
            {locations.map((item, index) => (
              <C.LocationItem key={index}>
                <C.LocationText>{item}</C.LocationText>
              </C.LocationItem>
            ))}
          </C.LocationList>
        </C.MainContent>
      </C.Container>
    );
  }
}
