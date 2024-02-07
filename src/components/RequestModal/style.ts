import styled from "styled-components/native";

export const Container = styled.Modal`
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
`;

export const MainContent = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

export const InputArea = styled.View`
  margin-top: 12px;
`;

export const Input = styled.TextInput`
  border-bottom: #000;
  border-bottom-width: 1px;
  border-color: #000;
  outline: none;
  border-radius: 5px;
  padding: 10px;
`;

export const LocationList = styled.ScrollView`
  margin-top: 12px;
`;

export const LocationItem = styled.TouchableOpacity`
  padding: 12px;
`;

export const LocationText = styled.Text`
  font-size: 16px;
  color: #000;
`;
