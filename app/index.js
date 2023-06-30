import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";
import fonts from "../constants/fonts";
import { COLORS } from "../constants/colors";

export default function Index() {
  return (
    <SafeAreaView style={{ fontFamily: fonts.FONTS.regular }}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </SafeAreaView>
  );
}
