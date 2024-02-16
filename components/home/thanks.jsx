import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { resetpass } from "../../constants/image";
import { FONTS } from "../../constants/fonts";

const Thanks = () => {
    const {width, height} = Dimensions.get("window")
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.medium,
        marginTop: SPACING.medium,
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
          <Image source={resetpass} style={{width: width * 0.15, height: width * 0.15, resizeMode: "contain"}}/>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 20,
              color: COLORS.textColor,
            }}
          >
            John Deo
          </Text>
          <Text
            style={{
              fontFamily: FONTS.extralight,
              fontSize: 14,
              color: COLORS.boxbg,
              marginTop: SPACING.small,
            }}
          >
            Donated 20000XFA
          </Text>
        </View>
      </View>
      <View
        style={{
          width: width * 0.3,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          padding: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            borderRadius: 15,
            alignContent: "center",
            justifyContent: "center",
            padding: 5,
            marginBottom: SPACING.small,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: FONTS.medium,
              color: COLORS.primary,
              fontSize: 13,
            }}
          >
            Say Thank
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Thanks;
