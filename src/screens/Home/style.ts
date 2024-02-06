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

export const LogoutButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
