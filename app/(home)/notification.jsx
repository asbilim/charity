import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import Notification from "../../components/home/notification";

const Notifications = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" , height: height}}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <View style={{ marginRight: 21 }}>
              <AntDesign name="arrowleft" size={24} color={COLORS.primary} />
            </View>
          ),
          headerTitle: () => (
            <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>
              Notification
            </Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: SPACING.medium,
            gap: 15
          }}
        >
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
