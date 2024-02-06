import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#000" />
      <Text>Welcome to Uber!</Text>
    </SafeAreaView>
  );
};
