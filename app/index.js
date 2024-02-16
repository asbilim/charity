import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import { FONTS } from "../constants/fonts";
import { welcome } from "../constants/image";
import { welcomeStyles } from "../styles/welcome";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [connected, setConnected] = useState((connected) => false);

  const router = useRouter();

  const handleConnected = async () => {
    const isConnected = await AsyncStorage.getItem("isLogin");
    if (isConnected == "true") {
      router.push("/(tabs)/");
    }
  };

  useEffect(() => {
    const run = async () => {
      const isConnected = await AsyncStorage.getItem("isLogin");
      setConnected((connected) => isConnected);
      handleConnected();
    };

    run();
  }, []);

  return (
    <SafeAreaView
      style={[welcomeStyles.container, { fontFamily: FONTS.regular }]}
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
          <TouchableOpacity
            style={welcomeStyles.welcomeTextButtonRegister}
            onPress={() => {
              router.replace("(auth)/register");
            }}
          >
            <Text style={welcomeStyles.welcomeText3}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={welcomeStyles.welcomeTextButtonsLogin}
            onPress={() => {
              router.replace("(auth)/login");
            }}
          >
            <Text style={welcomeStyles.welcomeText3}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
