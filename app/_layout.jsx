import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync()

export default function Layout(){

    const [fontsLoaded] = useFonts({
        'Boska-light':require("../assets/fonts/Ranade-Light.otf"),
        'Boska-italic':require("../assets/fonts/Ranade-Italic.otf"),
        'Boska-medium':require("../assets/fonts/Ranade-Medium.otf"),
        'Boska-bold':require("../assets/fonts/Ranade-Bold.otf"),
        'Boska-regular':require("../assets/fonts/Ranade-Regular.otf"),
        'Boska-medium-Italic':require("../assets/fonts/Ranade-MediumItalic.otf"),
    })

    const onLayoutRootView = useCallback(async () =>{

        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }

    },[fontsLoaded])

    if(!fontsLoaded){
        return null;
    }

    return (
        <Stack />
    )
}