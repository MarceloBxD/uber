import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 0 32px;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #fff;
`;
