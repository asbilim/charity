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
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import Notification from "../../components/home/notification";
import Category from "../../components/home/category";
import Fundraising from "../../components/home/fundraising";
import FundraisingSm from "../../components/home/fundraisingsm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const M = () => {
  const { height, width } = Dimensions.get("window");
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user } = useLocalSearchParams();
  const [text, setText] = useState("");
  const [numberOfLines, setNumberOfLines] = useState(1);

  const handleTextChange = (value) => {
    setText(value);
    const lines = value.split("\n").length;
    if (lines <= 4) {
      setNumberOfLines(lines);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        height: height,
        justifyContent: "space-between",
      }}
    >
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
            <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>{user}</Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <View
      // style={{
      //   height: height * 0.8,
      // }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              width: width * 0.95,
            }}
          >
            <View
              style={{
                display: "flex",
                width: width * 0.8,
                padding: 10,
                backgroundColor: "#f8f8f8",
                marginVertical: 5,
                borderRadius: BORDER_RADIUS.small
              }}
            >
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, nisi.
              </Text>
              <View
                style={{
                  alignSelf: "flex-end",
                  marginTop: 5,
                }}
              >
                <Text>2min ago</Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.8,
                padding: 10,
                alignSelf: "flex-end",
                backgroundColor: COLORS.primary,
                marginVertical: 5,
                borderRadius: BORDER_RADIUS.small
              }}
            >
              <Text style={{color: COLORS.white}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, nisi.
              </Text>
              <View
                style={{
                  alignSelf: "flex-end",
                  marginTop: 5,
                }}
              >
                <Text style={{color: COLORS.white}}>2min ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "flex-end",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 10,
          height: 44 * numberOfLines,
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
          multiline={true}
          numberOfLines={numberOfLines}
          value={text}
          onChangeText={handleTextChange}
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
          <FontAwesome5
            name="telegram-plane"
            size={25}
            color={COLORS.primary}
            style={{ opacity: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default M;
