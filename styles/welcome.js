import colors from "../constants/colors";
import sizes from "../constants/sizes";
import fonts from "../constants/fonts";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const welcomeStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: sizes.BORDER_RADIUS.medium,
    marginTop: sizes.SPACING.large,
  },
  welcomeImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width - 10,
    height: height / 2.2,
    backgroundColor: colors.COLORS.primary,
    borderRadius: sizes.BORDER_RADIUS.large,
  },
  welcomeText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width - 10,
    height: height / 2,
    margin: 0,
    marginTop: sizes.SPACING.large,
    borderColor: colors.COLORS.gray,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: sizes.BORDER_RADIUS.large,
    borderTopRightRadius: sizes.BORDER_RADIUS.large,
    padding: sizes.SPACING.medium,
    backgroundColor: colors.COLORS.white,
    position: "relative",
  },

  welcomeTextBar: {
    position: "absolute",
    top: 10,
    alignItems: "center",
    height: 2,
    width: width / 4,
    backgroundColor: colors.COLORS.gray,
    borderRadius: sizes.BORDER_RADIUS.large,
  },

  welcomeText1: {
    fontFamily: fonts.FONTS.bold,
    fontSize: sizes.SIZES.xLarge,
    color: colors.COLORS.textColor,
    textAlign: "center",
    marginBottom: sizes.SPACING.xLarge,
  },
  welcomeText2: {
    fontFamily: fonts.FONTS.regular,
    fontSize: sizes.SIZES.small,
    color: colors.COLORS.textColor,
    textAlign: "center",
    marginBottom: sizes.SPACING.xLarge,
  },

  welcomeText3: {
    fontFamily: fonts.FONTS.regular,
    fontSize: sizes.SIZES.medium,
    color: colors.COLORS.textColor,
  },

  welcomeTextButtons: {
    borderRadius: sizes.BORDER_RADIUS.medium,
    backgroundColor: colors.COLORS.secondary,
    width: width / 1.2,
    height: height / 15,
    display: "flex",
    flexDirection: "row"
  },

  welcomeTextButtonRegister: {
    borderRadius: sizes.BORDER_RADIUS.medium,
    backgroundColor: "#ffffff",
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    height: height / 15,
  },
  welcomeTextButtonsLogin: {
    borderRadius: sizes.BORDER_RADIUS.medium,
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: height / 15,
  },
});

export { welcomeStyles };
