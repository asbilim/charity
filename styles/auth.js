import { SIZES, SPACING, ELEVATION, BORDER_RADIUS } from "../constants/sizes";
import { FONTS } from "../constants/fonts";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: height/1.1
    }
})

export {
    loginStyles
}