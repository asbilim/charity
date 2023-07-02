import { View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";

const { width, height } = Dimensions.get("window");

const Category = ({ current, text }) => {
  return (
    <View
      style={{
        minWidth: width * 0.3,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        style={
          current
            ? {
                backgroundColor: COLORS.primary,
                borderRadius: BORDER_RADIUS.medium,
                alignContent: "center",
                justifyContent: "center",
                padding: 5,
                marginBottom: SPACING.large,
              }
            : {
                borderColor: COLORS.primary,
                borderWidth: 1,
                borderRadius: BORDER_RADIUS.medium,
                alignContent: "center",
                justifyContent: "center",
                padding: 5,
                marginBottom: SPACING.large,
              }
        }
      >
        <Text
          style={
            current
              ? {
                  textAlign: "center",
                  fontFamily: FONTS.medium,
                  color: "#fff",
                  fontSize: 15,
                }
                : {
                  textAlign: "center",
                  fontFamily: FONTS.medium,
                  color: COLORS.primary,
                  fontSize: 15,
                }
          }
        >
         {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
