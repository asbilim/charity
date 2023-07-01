import { SIZES, SPACING, ELEVATION, BORDER_RADIUS } from "../constants/sizes";
import { FONTS } from "../constants/fonts";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "../constants/colors";

const { width, height } = Dimensions.get("window");

const loginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.1,
    marginTop: SPACING.large,
    marginBottom: SPACING.large,
    flex: 1,
  },
  loginOrBarContainer: {
    marginTop: SPACING.large,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  loginOrBar: {
    alignItems: "center",
    height: 2,
    width: width / 3,
    backgroundColor: COLORS.textColor,
    borderRadius: BORDER_RADIUS.large,
  },
});

export { loginStyles };
