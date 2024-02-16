import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const handleConnected = async () => {
    // await AsyncStorage.removeItem("isLogin");
    const isConnected = await AsyncStorage.getItem("isLogin");
    console.log(isConnected);
    setLoaded(true);
    if (isConnected == "true") {
      router.replace("../(tabs)/");
    }
  };

  useEffect(() => {
    handleConnected();
  }, []);

  const [fontsLoaded] = useFonts({
    "Boska-light": require("../assets/fonts/Ranade-Light.otf"),
    "Boska-italic": require("../assets/fonts/Ranade-Italic.otf"),
    "Boska-medium": require("../assets/fonts/Ranade-Medium.otf"),
    "Boska-bold": require("../assets/fonts/Ranade-Bold.otf"),
    "Boska-regular": require("../assets/fonts/Ranade-Regular.otf"),
    "Boska-medium-Italic": require("../assets/fonts/Ranade-MediumItalic.otf"),
  });

  SplashScreen.preventAutoHideAsync()
    .then(() => console.log("showing the splash screen"))
    .catch(() => console.warn("something went wrong"));

  if (!fontsLoaded) {
    return null;
  }

  if (loaded) {
    SplashScreen.hideAsync()
      .then(() => console.log("Splash screen hidden"))
      .catch(console.warn);
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
