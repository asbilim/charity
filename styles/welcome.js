import { COLORS } from "../constants/colors";
import { SIZES, SPACING, ELEVATION, BORDER_RADIUS } from "../constants/sizes";
import { FONTS } from "../constants/fonts";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const welcomeStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: BORDER_RADIUS.medium,
    marginTop: SPACING.large,
  },
  welcomeImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width - 10,
    height: height / 2.2,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.large,
  },
  welcomeText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width - 10,
    height: height / 2,
    margin: 0,
    marginTop: SPACING.large,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: BORDER_RADIUS.large,
    borderTopRightRadius: BORDER_RADIUS.large,
    padding: SPACING.medium,
    backgroundColor: COLORS.white,
    position: "relative",
  },

  welcomeTextBar: {
    position: "absolute",
    top: 10,
    alignItems: "center",
    height: 2,
    width: width / 4,
    backgroundColor: COLORS.gray,
    borderRadius: BORDER_RADIUS.large,
  },

  welcomeText1: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.textColor,
    textAlign: "center",
    marginBottom: SPACING.xLarge,
  },
  welcomeText2: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.textColor,
    textAlign: "center",
    marginBottom: SPACING.xLarge,
  },

  welcomeText3: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.textColor,
  },

  welcomeTextButtons: {
    borderRadius: BORDER_RADIUS.medium,
    backgroundColor: COLORS.secondary,
    width: width / 1.2,
    height: height / 15,
    display: "flex",
    flexDirection: "row"
  },

  welcomeTextButtonRegister: {
    borderRadius: BORDER_RADIUS.medium,
    backgroundColor: "#ffffff",
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    height: height / 15,
  },
  welcomeTextButtonsLogin: {
    borderRadius: BORDER_RADIUS.medium,
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: height / 15,
  },
});

export { welcomeStyles };
