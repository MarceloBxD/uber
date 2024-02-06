import { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api";

export default () => {
  const navigation = useNavigation();
  const [formType, setFormType] = useState<"login" | "register">("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => async () => {
    if (!email || !password) {
      return;
    }

    await api.login(email, password);
    navigation.navigate("Home" as never);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => async () => {
    await api.logout();
  };

  if (formType === "login") {
    navigation.setOptions({
      headerTitle: "Login",
    });
  } else {
    navigation.setOptions({
      headerTitle: "Cadastre-se",
    });
  }

  return (
    <S.Container>
      <S.Title>{formType === "login" ? "Login" : "Register"}</S.Title>
      <S.Field
        value={email}
        onChangeText={(t: string) => setEmail(t)}
        selectionColor="#000"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <S.Field
        value={password}
        onChangeText={(t: string) => setPassword(t)}
        selectionColor="#000"
        placeholder="Senha"
        secureTextEntry={true}
      />
      <S.Button onPress={formType === "login" ? handleLogin() : handleLogout()}>
        <S.ButtonText>
          {formType === "login" ? "Login" : "Cadastrar"}
        </S.ButtonText>
      </S.Button>
      <S.ChangeFormButton
        onPress={() => setFormType(formType === "login" ? "register" : "login")}
      >
        <S.ChangeFormText>
          {formType === "login" ? "Cadastrar" : "Login"}
        </S.ChangeFormText>
      </S.ChangeFormButton>
    </S.Container>
  );
};
