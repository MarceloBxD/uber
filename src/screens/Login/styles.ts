import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
`;

export const Field = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ChangeFormButton = styled.TouchableOpacity`
  margin-top: 16px;
  text-decoration: underline;
`;

export const ChangeFormText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline;
`;
