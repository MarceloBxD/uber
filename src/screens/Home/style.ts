import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
`;

export const ItineraryArea = styled.View`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px #999;
  border-color: #eee;
  border-width: 1px;
`;

export const ItineraryItem = styled.TouchableHighlight`
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ItineraryLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ItineraryPoint = styled.View`
  background-color: ${(props: { color: string }) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;
export const ItineraryTitle = styled.Text`
  margin-left: 10px;
  color: #999;
`;
export const ItineraryValue = styled.Text`
  font-size: 16px;
  color: #000;
  text-align: center;
`;
