import {COLORS} from "../constants/colors";
import {SIZES, SPACING, BORDER_RADIUS, ELEVATION} from "../constants/sizes";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

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
