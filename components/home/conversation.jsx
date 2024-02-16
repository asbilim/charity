import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { resetpass } from "../../constants/image";
import { FONTS } from "../../constants/fonts";
import { useRouter } from "expo-router";

const Conversation = () => {
  const { width, height } = Dimensions.get("window");
  const router = useRouter()
  return (
    <View
      style={{
        width: width * 0.95,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.medium,
        marginTop: SPACING.medium,
        paddingVertical: SPACING.xSmall,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 0,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: width * 0.15,
            width: width * 0.15,
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
              width: width * 0.15,
              height: width * 0.15,
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 19,
              color: COLORS.textColor,
            }}
          >
            John Deo
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 17,
                color: COLORS.textColor,
              }}
            >
              Hello jor
            </Text>
            <Text
              style={{
                fontFamily: FONTS.light,
                fontSize: 16,
                color: COLORS.textColor,
              }}
            >
              2min ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Conversation;
