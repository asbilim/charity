import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import Notification from "../../components/home/notification";
import Category from "../../components/home/category";
import Fundraising from "../../components/home/fundraising";

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
              bookmark
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
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              marginTop: 10,
              height: height * 0.1
            }}
          >
            <Category current={true} text={"All"} />
            <Category current={false} text={"Education"} />
            <Category current={false} text={"Environment"} />
            <Category current={false} text={"Medical"} />
            <Category current={false} text={"Infrastructure"} />
            <Category current={false} text={"Disaster"} />
            <Category current={false} text={"Orphanages"} />
            <Category current={false} text={"Disable"} />
            <Category current={false} text={"Humanity"} />
            <Category current={false} text={"Others"} />
          </View>
        </ScrollView>
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: SPACING.medium,
            marginBottom: SPACING.xxLarge,
            paddingBottom: SPACING.xxLarge,
            gap: 15
          }}
        >
          <Fundraising  bookmark={true}/>
          <Fundraising  bookmark={true}/>
          <Fundraising  bookmark={true}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
