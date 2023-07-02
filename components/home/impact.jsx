import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";
import { resetpass } from "../../constants/image";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Impact = ({ current, text }) => {
  return (
    <ImageBackground
      source={resetpass}
      style={{
        width: width * 0.4,
        height: height * 0.3,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: BORDER_RADIUS.small,
      }}
    >
      <View style={{}}>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "relative",
            width: width * 0.4,
            height: height * 0.3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: BORDER_RADIUS.small,
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              color: "#FFF",
              fontFamily: FONTS.extralight,
              fontSize: 15,
              padding: 10,
            }}
            numberOfLines={2}
          >
            Little Ema is Ok with the help you all brought
          </Text>
          <View
            style={{
              top: height * 0.02,
              height: width * 0.12,
              width: width * 0.12,
              borderColor: COLORS.primary,
              borderWidth: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: BORDER_RADIUS.large,
              marginRight: 10,
            }}
          >
            <Ionicons name="play" size={25} color={COLORS.primary} />
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default Impact;
