import { AntDesign } from "@expo/vector-icons";
import * as C from "./style";

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
      </C.Container>
    );
  }
}
