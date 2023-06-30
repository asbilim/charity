import { COLORS } from "../constants/colors";
import { SIZES } from "../constants/sizes";
import { FONTS } from "../constants/fonts";
import { StyleSheet } from "react-native";

const welcomeStyles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.black,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.medium,
      marginBottom: SPACING.medium,
    },
    title: {
      fontFamily: FONT.medium,
      fontSize: SIZES.large,
      color: COLORS.black,
      marginBottom: SPACING.medium,
    },
    subtitle: {
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.gray,
      marginBottom: SPACING.medium,
    },
    text: {
      fontFamily: FONT.regular,
      fontSize: SIZES.small,
      color: COLORS.gray2,
    },
});

export {
    welcomeStyles
}