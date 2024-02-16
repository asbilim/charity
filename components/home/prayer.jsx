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
import { resetpass } from "../../constants/image";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Prayers = ({ current, text }) => {
  return (
    <View
      style={{
        width: width * 0.8,
        height: height * 0.3,
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: SPACING.small,
        paddingVertical: SPACING.small,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.medium,
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 1,
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
          <Image
            source={resetpass}
            style={{
              width: width * 0.12,
              height: height * 0.12,
              resizeMode: "contain",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 20,
              color: COLORS.textColor,
            }}
          >
            Naoussi Jordan
          </Text>
          <Text
            style={{
              fontFamily: FONTS.extralight,
              fontSize: 14,
              color: COLORS.gray,
            }}
          >
            Today
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={25}
            color={COLORS.primary}
            style={{ opacity: 1 }}
          />
        </View>
      </View>

      <Text
        numberOfLines={3}
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          marginTop: SPACING.medium,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adip djkssldkdlsk
      </Text>
      <Text
        numberOfLines={3}
        style={{
          fontFamily: FONTS.light,
          fontSize: SIZES.xSmall,
          marginTop: SPACING.large,
        }}
      >
        You and 20 others send this prayer!
      </Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: SPACING.medium,
          gap: 5
        }}
      >
        <View>
          <Ionicons
            name="heart-outline"
            size={25}
            color={COLORS.primary}
          />
        </View>
        <Text
          numberOfLines={3}
          style={{
            fontFamily: FONTS.regular,
            fontSize: 14,
            marginTop: SPACING.small,
          }}
        >
          Like
        </Text>
        <View>
          <Ionicons
            name="share-social"
            size={25}
            color={COLORS.primary}
          />
        </View>
        <Text
          numberOfLines={3}
          style={{
            fontFamily: FONTS.regular,
            fontSize: 14,
            marginTop: SPACING.small,
          }}
        >
          Share
        </Text>
      </View>
    </View>
  );
};

export default Prayers;
