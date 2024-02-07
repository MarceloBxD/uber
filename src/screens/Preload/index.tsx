import * as C from "./styles";
import api from "../../../services/api";
import { useEffect } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const checkToken = async () => {
      const token = await api.getToken();
      if (token) {
        // validar token

        // mandar pra home caso o token seja válido
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    };
    checkToken();
  }, []);

  return (
    <C.Container>
      <C.Title>Uber</C.Title>
      <C.Loading size="large" color="#FFF" />
    </C.Container>
  );
};
