import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";
import fonts from "../constants/fonts";
import { COLORS } from "../constants/colors";

export default function Index() {
  return (
    <SafeAreaView style={{ fontFamily: fonts.FONTS.regular }}>
      <Text style={{ fontFamily: fonts.FONTS.regular, fontSize: 18 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam
        voluptate pariatur quas magni voluptatem, voluptatibus nostrum
        laudantium reiciendis tempora, molestias odio. Numquam nulla sequi ex
        explicabo? Explicabo, minima aut?
      </Text>
    </SafeAreaView>
  );
}
