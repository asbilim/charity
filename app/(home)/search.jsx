import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import Notification from "../../components/home/notification";
import Category from "../../components/home/category";
import Fundraising from "../../components/home/fundraising";
import FundraisingSm from "../../components/home/fundraisingsm";

const Notifications = () => {
  const { height, width } = Dimensions.get("window");
  const [search, setSearch] = useState("");
  const router = useRouter()


  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: height }}>
      <Stack.Screen
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
                style={{
                  marginRight: 21,
                }}
              >
                <AntDesign name="arrowleft" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            );
          },
          headerTitle: () => (
            <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>Search</Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
          height: height * 0.1,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            borderWidth: 3,
            borderColor: COLORS.primary,
            width: width * 0.8,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 12,
          }}
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="Search..."
        />
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
            name="filter"
            size={25}
            color={COLORS.primary}
            style={{ opacity: 1 }}
          />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
            height: height * 0.12,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: SPACING.medium,
            marginBottom: SPACING.xxLarge,
            paddingBottom: SPACING.xxLarge,
            gap: 15,
          }}
        >
          <FundraisingSm/>
          <FundraisingSm/>
          <FundraisingSm/>
          <FundraisingSm/>
          <FundraisingSm/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
