import { Stack, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import {FONTS} from "../constants/fonts";
import { welcome } from "../constants/image";
import { welcomeStyles } from "../styles/welcome";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(home)/home");
      // router.push("/(resetpass)/confirmation");
      // router.push("/(auth)/login");
      // router.push("/(account)/pin");
    }, 1000);
  }, []);

  return (
    <SafeAreaView
      style={[welcomeStyles.container, { fontFamily: FONTS.regular}]}
    >
      <View style={welcomeStyles.welcomeImage}>
        <Image
          source={welcome}
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />
      </View>
      <View style={[welcomeStyles.welcomeText]}>
        <View style={welcomeStyles.welcomeTextBar}></View>
        <Text style={welcomeStyles.welcomeText1}>
          Donate What you have with ease
        </Text>
        <Text style={welcomeStyles.welcomeText2}>
          Discover the helpless ones and bring then your support
        </Text>
        <View style={welcomeStyles.welcomeTextButtons}>
          <TouchableOpacity style={welcomeStyles.welcomeTextButtonRegister}>
            <Text style={welcomeStyles.welcomeText3}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={welcomeStyles.welcomeTextButtonsLogin}>
            <Text style={welcomeStyles.welcomeText3}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
