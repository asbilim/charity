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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Notification = ({ current, text }) => {
  return (
    
      <View
        style={{
          width: width * 0.95,
          height: height * 0.1,
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 0,
          alignItems: "center",
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: BORDER_RADIUS.medium,
        }}
      >
        <View
          style={{
            height: width * 0.12,
            width: width * 0.12,
            backgroundColor: COLORS.boxbg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: BORDER_RADIUS.large,
            marginRight: 10,
          }}
        >
          <Ionicons name="wallet" size={25} color={COLORS.primary} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 20,
              color: COLORS.textColor,
            }}
            numberOfLines={1}
          >
            Top Up was Successful
          </Text>
          <Text
            style={{
              fontFamily: FONTS.extralight,
              fontSize: 14,
              color: COLORS.gray,
            }}
            numberOfLines={2}
          >
            My wallet balance Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla!
          </Text>
        </View>
      </View>
  );
};

export default Notification;
