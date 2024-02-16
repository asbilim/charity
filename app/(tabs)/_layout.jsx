import { Tabs } from "expo-router";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Dimensions, Image, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { BORDER_RADIUS } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import { icon } from "../../constants/image";

export default function Layout() {
  const router = useRouter();
  const { height, width } = Dimensions.get("window");

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity>
              <AntDesign
                name="home"
                size={25}
                color={focused ? COLORS.primary : COLORS.textColor}
              />
            </TouchableOpacity>
          ),
          tabBarShowLabel: true,
          tabBarLabel: "home",
          tabBarLabelStyle: {color: COLORS.textColor},


          headerLeft: () => {
            return (
              <View style={{ marginRight: 15, marginLeft: 15 }}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 22 }}>
                CharitEase
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginRight: 15 }}>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    router.push("../(home)/search");
                  }}
                >
                  <Feather
                    name="search"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    router.push("../(home)/notification");
                  }}
                >
                  <Ionicons
                    name="notifications"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    router.push("../(home)/bookmark");
                  }}
                >
                  <Ionicons
                    name="bookmark"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          
        }}
      />
      <Tabs.Screen
        name="donation"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity>
              <Feather
                name="calendar"
                size={24}
                color={focused ? COLORS.primary : COLORS.textColor}
              />
            </TouchableOpacity>
          ),
          tabBarShowLabel: true,
          tabBarLabelStyle: {color: COLORS.textColor},

          headerLeft: () => {
            return (
              <View style={{ marginRight: 15, marginLeft: 15 }}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 22 }}>
                My Donations
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginRight: 15 }}>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="fundraising"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity>
              <Feather
                name="menu"
                size={24}
                color={focused ? COLORS.primary : COLORS.textColor}
              />
            </TouchableOpacity>
          ),
          tabBarShowLabel: true,
          tabBarLabelStyle: {color: COLORS.textColor},

          headerLeft: () => {
            return (
              <View style={{ marginRight: 15, marginLeft: 15 }}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 22 }}>
                My Fundraising
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginRight: 15 }}>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    
                  }}
                >
                  <Feather
                    name="box"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="messenger"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity>
              <Feather
                name="message-circle"
                size={24}
                color={focused ? COLORS.primary : COLORS.textColor}
              />
            </TouchableOpacity>
          ),
          tabBarShowLabel: true,
          tabBarLabelStyle: {color: COLORS.textColor},

          headerLeft: () => {
            return (
              <View style={{ marginRight: 15, marginLeft: 15 }}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 22 }}>
                Inbox
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginRight: 15 }}>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity>
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.textColor}
              />
            </TouchableOpacity>
          ),
          tabBarShowLabel: true,
          tabBarLabelStyle: {color: COLORS.textColor},

          headerLeft: () => {
            return (
              <View style={{ marginRight: 15, marginLeft: 15 }}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 22 }}>
                Profile
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginRight: 15 }}>
                <TouchableOpacity
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    backgroundColor: COLORS.boxbg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                  onPress={() => {
                    
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={25}
                    color={COLORS.primary}
                    style={{ opacity: 1 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
