import sizes from "../constants/sizes";
import fonts from "../constants/fonts";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const loginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.1,
    marginTop: sizes.SPACING.large,
    marginBottom: sizes.SPACING.large,
    flex: 1,
  },
  loginOrBarContainer: {
    marginTop: sizes.SPACING.large,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  loginOrBar: {
    alignItems: "center",
    height: 2,
    width: width / 3,
    backgroundColor: colors.COLORS.textColor,
    borderRadius: sizes.BORDER_RADIUS.large,
  },
});

export { loginStyles };
